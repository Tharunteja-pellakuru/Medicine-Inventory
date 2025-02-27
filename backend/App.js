const express = require("express");
const path = require("path");

const cors = require("cors");

const { open } = require("sqlite");
const sqlite3 = require("sqlite3");

const app = express();
app.use(express.json());
app.use(cors());

const dbPath = path.join(__dirname, "Medicals.db");
let db;

const initializeDBAndServer = async () => {
  try {
    db = await open({ filename: dbPath, driver: sqlite3.Database });

    await db.exec(`
      CREATE TABLE IF NOT EXISTS medicals (SNo INTEGER PRIMARY KEY AUTOINCREMENT, ProductName VARCHAR(250), Quantity INTEGER, MRP INTEGER, Rate INTEGER )
    `);

    app.listen(4000, () =>
      console.log("Server Started at http://localhost:4000")
    );
  } catch (error) {
    console.log(`ERROR MESSAGE: ${error.message}`);
    process.exit(1);
  }
};

initializeDBAndServer();

app.get("/", async (request, response) => {
  response.send(
    (await db.all(`SELECT * FROM medicals ORDER BY ProductName;`)) || []
  );
});

app.delete("/:id/", async (request, response) => {
  const { id } = request.params;

  try {
    await db.run(`DELETE FROM medicals WHERE SNo = ?`, [id]);

    await db.run(`
      UPDATE medicals
      SET SNo = (
        SELECT COUNT(*) FROM medicals AS m WHERE m.SNo < medicals.SNo
      ) + 1;
    `);

    await db.run(`DELETE FROM sqlite_sequence WHERE name='medicals';`);

    response.send({ message: "Deleted and reordered SNo successfully!" });
  } catch (error) {
    response.status(500).send({ error: error.message });
  }
});

app.post("/post/", async (request, response) => {
  const { ProductName, Quantity, MRP, Rate } = request.body;

  try {
    await db.run(
      `INSERT INTO medicals (ProductName, Quantity, MRP, Rate) VALUES (?, ?, ?, ?)`,
      [ProductName, Quantity, MRP, Rate]
    );

    response.status(201).send({ message: "Medicine Added Successfully" });
  } catch (error) {
    response.status(500).send({ error: error.message });
  }
});

app.put("/put/:SNo/", async (request, response) => {
  const SNo = parseInt(request.params.SNo, 10);
  const { ProductName, Quantity, MRP, Rate } = request.body;

  try {
    await db.run(
      `UPDATE medicals SET ProductName = ?, Quantity = ?, MRP = ?, Rate = ? WHERE SNo = ?`,
      [ProductName, Quantity, MRP, Rate, SNo]
    );

    response.json({ message: "Medicine updated successfully!" });
  } catch (error) {
    console.error("Error updating medicine:", error);
    response.status(500).json({ error: "Failed to update medicine" });
  }
});

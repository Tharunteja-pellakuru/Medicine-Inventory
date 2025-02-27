import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner.js";
import { Pencil, Trash } from "lucide-react";

const Table = ({ myData, data, setData, setEditItem }) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data.length > 0) {
      const newData = data.filter((eachItem) => {
        const productName = eachItem?.ProductName || "";
        return productName.toLowerCase().includes(myData.toLowerCase());
      });
      setFilteredData(newData);
    } else {
      setFilteredData([]);
    }
  }, [myData, data]);

  const onDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/${id}/`);

      const updatedData = data.filter((eachItem) => eachItem.SNo !== id);
      setData(updatedData);
      setFilteredData(updatedData);
    } catch (error) {
      console.error("Delete failed:", error.response?.data || error.message);
    }
  };

  if (filteredData.length === 0) {
    return <Spinner />;
  }

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th style={{ width: "10%" }}>S.No</th>
            <th style={{ width: "30%" }}>Product Name</th>
            <th style={{ width: "10%" }}>Quantity</th>
            <th style={{ width: "10%" }}>MRP</th>
            <th style={{ width: "10%" }}>Rate</th>
            <th style={{ width: "10%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                Edit/Delete
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index + 1}>
              {" "}
              <td>{index + 1}</td>
              <td style={{ width: "30%", fontWeight: "bold" }}>
                {item.ProductName}
              </td>
              <td>{item.Quantity}</td>
              <td>{item.MRP}</td>
              <td>{item.Rate}</td>
              <td className="btn-cont">
                <button
                  className="Btn"
                  onClick={() => {
                    setEditItem({
                      SNo: item.SNo,
                      ProductName: item.ProductName,
                      Quantity: item.Quantity,
                      MRP: item.MRP,
                      Rate: item.Rate,
                    });
                  }}
                >
                  <Pencil size={20} />
                </button>

                <button
                  onClick={() => onDelete(item.SNo)}
                  className="Btn-delete"
                >
                  <Trash size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

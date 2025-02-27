# Medicine Inventory Management System

A full-stack MERN-based inventory management system that allows users to **add, edit, delete, and search medicines** efficiently. This project uses **React.js for the frontend**, **Node.js & Express.js for the backend**, and **SQLite as the database**.

---

## 🚀 Features

✅ **Add medicines** with product name, quantity, MRP, and rate.  
✅ **Edit medicine details** dynamically.  
✅ **Delete medicines** and auto-reorder serial numbers (`SNo`).  
✅ **Real-time search** functionality.  
✅ **Ensures first letter of product name is capitalized**.  
✅ **Displays a slick image carousel** when no search is active.  
✅ **Includes an About Us and Contact Form section**.  
✅ **Data persistence** using SQLite (`Medicals.db`).  
✅ **Uses React Hooks (`useState`, `useEffect`)** for state management.  

---

## 🛠️ Tech Stack

### **Frontend (React.js)**
- **React.js** (State management using Hooks)  
- **Axios** (API communication)  
- **Lucide-React** (Icons)  
- **React-Scroll** (Smooth scrolling between sections)  
- **CSS** (Styling)  

### **Backend (Node.js & SQLite)**
- **Express.js** (API handling)  
- **SQLite3** (Database storage)  
- **CORS & JSON middleware** (Cross-Origin API requests)  

---

## 📂 Project Structure

```
medicine-inventory/
│── backend/              # Express.js server (Node.js)
│   ├── Medicals.db       # SQLite database
│   ├── App.js            # Main server file (CRUD operations)
│── frontend/             # React app
│   ├── src/
│   │   ├── components/   # Reusable React components
│   │   │   ├── Navbar.js
│   │   │   ├── Searchbar.js
│   │   │   ├── Table.js
│   │   │   ├── SlickCarousel.js
│   │   │   ├── AboutUs.js
│   │   │   ├── ContactForm.js
│   │   │   ├── Footer.js
│   │   ├── App.js        # Main application file
│   │   ├── index.js      # React entry point
│── package.json          # Dependencies and scripts
│── README.md             # Project documentation
```

---

## 🔧 Backend Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/yourusername/medicine-inventory.git
cd medicine-inventory
```

### **2️⃣ Install Backend Dependencies**
```sh
cd backend
npm install
```

### **3️⃣ Start the Backend Server**
```sh
node App.js
```

Server runs at `http://localhost:4000/` 🚀  

---

## 🖥 Frontend Setup

### **1️⃣ Navigate to Frontend Directory**
```sh
cd frontend
```

### **2️⃣ Install Frontend Dependencies**
```sh
npm install
```

### **3️⃣ Start the Frontend App**
```sh
npm start
```

The React app should be running at `http://localhost:3000/` 🚀  

---

## 📌 API Endpoints

| Method | Endpoint        | Description                     |
|--------|---------------|--------------------------------|
| GET    | `/`           | Fetch all medicines (sorted)  |
| POST   | `/post/`      | Add a new medicine           |
| PUT    | `/put/:SNo/`  | Update a medicine            |
| DELETE | `/:id/`       | Delete a medicine, reorder SNo |

---

## 🔄 How the Serial Number (SNo) is Handled

- **Upon Deletion**, serial numbers are dynamically **reordered** using:
```sql
WITH Reordered AS (
  SELECT SNo, ROW_NUMBER() OVER (ORDER BY ProductName) AS NewSNo FROM medicals
)
UPDATE medicals
SET SNo = (SELECT NewSNo FROM Reordered WHERE medicals.SNo = Reordered.SNo);
```
- This ensures that serial numbers remain **continuous** and **properly ordered**.

---

## 📸 Screenshots

### **📍 Dashboard View**  
_(Attach a screenshot of your main UI here)_  

### **📍 Add Medicine Form**  
_(Attach a screenshot of your add/edit form)_  

### **📍 Medicine Table**  
_(Attach a screenshot of the search & table section)_  

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 🤝 Contribution

Feel free to **fork**, open an **issue**, or submit a **pull request** if you have ideas for improvements! 🚀  


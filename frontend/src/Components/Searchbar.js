import { useEffect, useState } from "react";
import axios from "axios";

const Searchbar = ({
  changeStatus,
  changeText,
  setData,
  setTableStatus,
  editItem,
  setEditItem,
}) => {
  const [isOn, setIsOn] = useState(false);
  const [formData, setFormData] = useState({
    SNo: null,
    ProductName: "",
    Quantity: "",
    MRP: "",
    Rate: "",
  });

  useEffect(() => {
    if (editItem && Object.keys(editItem).length > 0) {
      setFormData({
        SNo: editItem.SNo ?? null,
        ProductName: editItem.ProductName || "",
        Quantity: editItem.Quantity || "",
        MRP: editItem.MRP || "",
        Rate: editItem.Rate || "",
      });
      setIsOn(true);
    }
  }, [editItem]);

  const handleToggle = () => {
    setIsOn(!isOn);
    setEditItem({});
    setTableStatus(!isOn);
  };

  const handleEventChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]:
        name === "ProductName"
          ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
          : parseFloat(value) || "",
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Fetch existing data
      const response = await axios.get("http://localhost:4000/");
      let updatedData = response.data || [];

      // Assign SNo based on the length of the list
      const newSNo = updatedData.length > 0 ? updatedData.length + 1 : 1;

      // Format the product name properly
      const formattedProduct = {
        ...formData,
        SNo: formData.SNo ?? newSNo, // Assign new SNo only if it's a new entry
        ProductName:
          formData.ProductName.charAt(0).toUpperCase() +
          formData.ProductName.slice(1).toLowerCase(),
      };

      if (formData.SNo !== null && formData.SNo !== undefined) {
        // Update existing product
        await axios.put(
          `http://localhost:4000/put/${formData.SNo}/`,
          formattedProduct
        );
      } else {
        // Insert new product with the correct SNo
        await axios.post("http://localhost:4000/post/", formattedProduct);
      }

      // Fetch updated sorted data
      const newResponse = await axios.get("http://localhost:4000/");
      setData(newResponse.data);

      alert(
        formData.SNo
          ? "Medicine updated successfully!"
          : "Medicine added successfully!"
      );

      // Reset form
      setFormData({
        SNo: null,
        ProductName: "",
        Quantity: "",
        MRP: "",
        Rate: "",
      });
      setEditItem({});
      setIsOn(false);
    } catch (error) {
      console.error("Error saving medicine:", error);
    }
  };

  return (
    <div className="input-container">
      {isOn ? (
        <form onSubmit={handleSubmit} className="add-container">
          <input
            name="ProductName"
            onChange={handleEventChange}
            value={formData.ProductName}
            className="input"
            placeholder="Medicine Name"
            type="text"
            required
          />
          <input
            name="Quantity"
            onChange={handleEventChange}
            value={formData.Quantity}
            className="input"
            placeholder="Quantity"
            type="number"
            required
          />
          <input
            name="MRP"
            onChange={handleEventChange}
            value={formData.MRP}
            className="input"
            placeholder="MRP"
            type="number"
            required
          />
          <input
            name="Rate"
            onChange={handleEventChange}
            value={formData.Rate}
            className="input"
            placeholder="Rate"
            type="number"
            required
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      ) : (
        <input
          onChange={(event) => {
            const text = event.target.value.trim();
            changeText(text);
            changeStatus(text);
          }}
          className="input"
          type="text"
          placeholder="Search Medicines..."
        />
      )}
      <button
        onClick={() => {
          handleToggle();
          setTableStatus(!isOn);
        }}
        className="button"
      >
        {isOn ? "Search Medicine" : "Add Medicine"}
      </button>
    </div>
  );
};

export default Searchbar;

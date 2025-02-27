import React, { useState, useEffect } from "react";
import axios from "axios";
import { Element } from "react-scroll";
import Navbar from "./Components/Navbar";
import Searchbar from "./Components/Searchbar";
import SlickCarousel from "./Components/SlickCarousel";
import Footer from "./Components/Footer";
import Table from "./Components/Table";
import ContactForm from "./Components/ContactForm";
import AboutUs from "./Components/AboutUs";
import "./App.css";

const App = () => {
  const [status, setStatus] = useState(false);
  const [tableStatus, setTableStatus] = useState(false);
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [editItem, setEditItem] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/");
        setData(response.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      }
    };

    fetchData();
  }, []);

  const changeStatus = (text) => {
    setStatus(text !== "");
  };

  const changeText = (text) => {
    setSearchText(text);
  };

  return (
    <div className="container">
      <Navbar setTableStatus={setTableStatus} setStatus={setStatus} />

      <Element name="home">
        <Searchbar
          changeStatus={changeStatus}
          editItem={editItem}
          setEditItem={setEditItem}
          changeText={changeText}
          setData={setData}
          setTableStatus={setTableStatus}
        />
        <div className="main-content">
          {status || tableStatus ? (
            <Table
              data={data}
              myData={searchText}
              setData={setData}
              setEditItem={setEditItem}
            />
          ) : (
            <SlickCarousel />
          )}
        </div>
      </Element>

      <Element name="about">{tableStatus === false && <AboutUs />}</Element>

      <Element name="contact">
        {tableStatus === false && <ContactForm />}
      </Element>

      <Footer />
    </div>
  );
};

export default App;

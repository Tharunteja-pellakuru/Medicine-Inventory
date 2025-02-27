import { Link } from "react-scroll";
import logo from "../assets/Logo.jpg";

const Navbar = ({ setTableStatus, setStatus }) => {
  const handleNavigation = () => {
    console.log("Clicked Navbar Link - Resetting States");

    setTableStatus((prev) => {
      console.log("Table Status Before:", prev);
      return false;
    });

    setStatus((prev) => {
      console.log("Search Status Before:", prev);
      return false;
    });

    // Force re-render after state update
    setTimeout(() => {
      console.log("Table and Search Status Updated!");
    }, 50);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img className="logo" src={logo} alt="Life Care Logo" />
        <div className="navbar-title">
          <h1>Life Care Pharma.</h1>
        </div>
      </div>
      <ul>
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={handleNavigation}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={handleNavigation}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={handleNavigation}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

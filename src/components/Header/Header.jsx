import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logoMicroProjet.png";
import img from "../../assets/images/pigeon-gd9dab9004_640.jpg";

export function Header() {
  return (
    <nav>
      <div className="top">
        <img className="logo" src={logo} alt="Your logo here" />
        <div>
          <Link to="/" className="menuLink">
            Home
          </Link>
          <Link to="/AboutUs" className="menuLink">
            About us
          </Link>
          <Link to="/Contact" className="menuLink">
            Contact
          </Link>
          <Link to="/Support" className="menuLink">
            Support
          </Link>
          <Link to="/Download" className="menuLink">
            Download
          </Link>
        </div>
      </div>
      <div className="bottom">
        <div className="text">
          <h1>BEST CHATTIG APP FOR BUSINESS</h1>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Class erat et
            maecenas interdum fermentum augue. Sociosqu pellentesque porttitor
            porta non etiam aptent. Luctus faucibus ullamcorper lorem lacus
            habitasse penatibus. Lacus faucibus consectetur sagittis, lorem ac
            velit dui vitae. At hendrerit nec sit dictum sociosqu fringilla.
          </p>
          <button>LEARN MORE</button>
        </div>
        <div className="img">
          <img className="pigeon" src={img} alt="Image d'un pigeon" />
          <small>
            Image par{" "}
            <a href="https://pixabay.com/fr/users/ralphs_fotos-1767157/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=7095564">
              Ralphs_Fotos
            </a>{" "}
            de{" "}
            <a href="https://pixabay.com/fr/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=7095564">
              Pixabay
            </a>
          </small>
        </div>
      </div>
    </nav>
  );
}

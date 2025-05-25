import { useState } from "react";
import GetStartedBtn from "../GetStartedBtn";
import "../../styles/Header.css";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleOpen = () => {
    setIsNavOpen((prevData) => !prevData);
  };

  return (
    <div className="header-div">
      <header className="">
        <div className="header-heading">
          <h1>
            <img src="./images/logo.svg" alt="logo" />
          </h1>
        </div>
        <nav className={`nav-bar ${isNavOpen ? "open" : ""}`}>
          <ul
            className="nav-bar-list"
          >
            {["Pricing", "Product", "About Us", "Carrers", "Community"].map(
              (item, index) => (
                <li className="nav-bar-item" key={index}>
                  {item}
                </li>
              )
            )}
          </ul>
        </nav>
        <div onClick={handleOpen} className="nav-hamburger">
          <img
            key={Math.random()}
            className=""
            src={`${
              isNavOpen
                ? "./images/icon-close.svg"
                : "./images/icon-hamburger.svg"
            }`}
            alt=""
          />
        </div>
        <div className="nav-hidden">
          <GetStartedBtn className="get-started-red-btn" />
        </div>
      </header>
    </div>
  );
};

export default Header;

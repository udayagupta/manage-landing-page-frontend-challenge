import { useState } from "react";
import GetStartedBtn from "../GetStartedBtn";
import "../../styles/Header.css";
import { motion } from "framer-motion";

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
          <motion.ul
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="nav-bar-list"
          >
            {["Pricing", "Product", "About Us", "Carrers", "Community"].map(
              (item, index) => (
                <li className="nav-bar-item" key={index}>
                  {item}
                </li>
              )
            )}
          </motion.ul>
        </nav>
        <div onClick={handleOpen} className="nav-hamburger">
          <motion.img initial={{opacity: 0, visibility: 0}} animate={{opacity: 1, visibility: 1}} transition={{duration: 0.5, ease: "linear"}} key={Math.random()} className="" src={`${isNavOpen ? "./images/icon-close.svg": "./images/icon-hamburger.svg"}`} alt="" />
        </div>
        <div className="nav-hidden">
          <GetStartedBtn className="get-started-red-btn" />
        </div>
      </header>
    </div>
  );
};

export default Header;

import React, { useRef, useState } from "react";
import Socials from "./Socials";
import NewsletterForm from "./NewsletterForm";
import "../../styles/Footer.css";


const NavLinks = ({ navLinks }) => {
  return (
    <ul className="footer-nav-list">
      {navLinks.map((link, index) => (
        <li className="footer-nav-link" key={index}>
          <a href={link.url}>{link.label}</a>
        </li>
      ))}
    </ul>
  );
};



const Footer = () => {
  const navLinksColumn1 = [
    { label: "Home", url: "#" },
    { label: "Pricing", url: "#" },
    { label: "Products", url: "#" },
    { label: "About Us", url: "#" },
  ];

  const navLinksColumn2 = [
    { label: "Careers", url: "#" },
    { label: "Community", url: "#" },
    { label: "Privacy Policy", url: "#" },
  ];
  return (
    <footer className=" ">
      <div className="footer-div-1">
        <div className="">
          <img src="./images/logo-white.svg" alt="logo" />
        </div>
        <Socials />
      </div>
      <div className="footer-div-2">
        <NavLinks navLinks={navLinksColumn1} />
        <NavLinks navLinks={navLinksColumn2} />
      </div>
      <div className="footer-div-3">
        <NewsletterForm />
      </div>
      <div className="footer-div-4">
        <p>Copyright 2020. All right reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

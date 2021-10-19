import React from "react";
import WorldIcon from "../vectors/WorldIcon";

const NavBar = () => {
  return (
    <div>
      <nav className="NavBar">
        <span className="Logoicon">
          <WorldIcon style={{ width: 20, height: 20 }} />
        </span>
        <span className="Logoname">World Countries</span>
        <span className="spacer" />
        <span className="tab-links">About Us</span>
        <span className="tab-links">Contact Us</span>
        <span className="tab-links">Search Country</span>
      </nav>
    </div>
  );
};

export default NavBar;

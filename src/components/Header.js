import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header id="header">
      <div className="inner">
        <div className="header">
          <div className="header_left">
            <h1 className="header_logo">
              <Link to="/">ARMARIO</Link>
            </h1>
            <ul>
              <li>
                <Link to="./review">REVIEW</Link>
              </li>
              <li>
                <Link to="./service">SERVICE</Link>
              </li>
              <li>
                <Link to="./event">EVENT</Link>
              </li>
            </ul>
          </div>
          <div className="header_right">
            <span className="store">
              <Link to="./store">STORE</Link>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;

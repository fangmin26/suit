import React from "react";
import { Link } from "react-router-dom";

function Ham() {
  return (
    <>
      <div className="hamburger-button">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="overlay">
        <nav className="menu">
          <ul>
            <li>
              <Link to="/">ARMARIO</Link>
            </li>
            <li>
              <Link to="./review">REVIEW</Link>
            </li>
            <li>
              <Link to="./service">SERVICE</Link>
            </li>
            <li>
              <Link to="./event">EVENT</Link>
            </li>
            <li>
              <Link to="./store">STORE</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
export default Ham;

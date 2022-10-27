import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import '../assets/css/Navbar.scss';

function MyNavbar() {
  return (
    <>
      <Navbar className="navigation">
      <div
        className="navigation-menu">
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </Navbar>
    </>
  );
}

export default MyNavbar;

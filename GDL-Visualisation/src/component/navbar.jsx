// import React from "react";
// const Nav = () => {
//     return (<>
//         <div>
            
//         </div>
//     </>)
// }
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function MyNavbar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark" style={{fontSize: 'Large'}}>
        <Navbar.Brand href="#home">
          <span className="brand-text">FYP{" "}</span>
          <span className="brand-text">Name</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="nav-item nav-link" href="/intro">
              Introduction
            </Nav.Link>
            <Nav.Link className="nav-item nav-link" href="/vis">
              Visualization
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default MyNavbar;

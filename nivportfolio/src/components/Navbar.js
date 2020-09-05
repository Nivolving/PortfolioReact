import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function TopNavbar() {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">Niv Swamy</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link className="mr-auto ml-3" href="#home">
          About Me
        </Nav.Link>
        <Nav.Link className="mr-auto ml-3" href="#home">
          Projects
        </Nav.Link>
        <Nav.Link className="mr-auto ml-3" href="#home">
          Resume
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

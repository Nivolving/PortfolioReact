import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function TopNavbar() {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="/About">Niv Swamy</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link className="mr-auto ml-3" href="/About">
          About Me
        </Nav.Link>
        <Nav.Link className="mr-auto ml-3" href="/Portfolio">
          Porfolio
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

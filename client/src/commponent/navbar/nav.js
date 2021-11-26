import React from "react";
import { Container, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../src-assets/Logo.png";

import "./nav.css";

function Navbar() {
  return (
    <>
      <Container>
        <Nav className="mt-4 d-flex justify-content-between center-items">
          <div className="d-flex justify-content-start">
            <Nav.Item>
              <Link to="/profile">Profile</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/my-collection">My Collection</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/add-literatur">Add Literature</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/">Logout</Link>
            </Nav.Item>
          </div>
          <Nav.Item className="d-flex justify-content-end">
            <Image src={Logo} />
          </Nav.Item>
        </Nav>
      </Container>
    </>
  );
}

export default Navbar;

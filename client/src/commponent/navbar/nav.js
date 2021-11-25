import React from "react";
import { Container, Nav, Image } from "react-bootstrap";
import Logo from "../../src-assets/Logo.png";

import "./nav.css";

function Navbar() {
  return (
    <>
      <Container>
        <Nav className="mt-4 d-flex justify-content-between center-items">
          <div className="d-flex justify-content-start">
            <Nav.Item>
              <Nav.Link>Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>My Collection</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Add Literature</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Logout</Nav.Link>
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

import React from "react";
import { Container, Nav, Image, Dropdown } from "react-bootstrap";
import Logo from "../../src-assets/Logo.png";
import profile from "../../src-assets/profile.png";
import logout from "../../src-assets/logout.png";

import "./nav.css";

function NavAdmin() {
  return (
    <>
      <div className="bg-darks">
        <Container>
          <Nav className="mt-4 d-flex justify-content-between center-items">
            <Nav.Item className="d-flex justify-content-start">
              <Image src={Logo} />
            </Nav.Item>
            <Nav.Item className="d-flex justify-content-end">
              <Dropdown align="end">
                <Dropdown.Toggle className="toggle-profile" id="dropdown-basic">
                  <Image src={profile} className="profiles" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Image src={logout} className="logout" />
                    <b>Logout</b>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Item>
          </Nav>
        </Container>
      </div>
    </>
  );
}

export default NavAdmin;

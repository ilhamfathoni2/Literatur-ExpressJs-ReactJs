import React, { useContext } from "react";
import { Container, Nav, Image, Dropdown } from "react-bootstrap";
import { UserContext } from "../../context/userContext";
import { useHistory } from "react-router";
import Logo from "../../src-assets/Logo.png";
import profile from "../../src-assets/profile.png";
import logout from "../../src-assets/logout.png";

import "./nav.css";

function NavAdmin() {
  const history = useHistory();

  const [, dispatch] = useContext(UserContext);

  const handleLogout = (e) => {
    e.preventDefault();
    history.push("/");

    dispatch({
      type: "LOGOUT",
    });
  };

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
                  <Dropdown.Item onClick={handleLogout}>
                    <Image src={logout} className="logout" />
                    <b className="text-logout">Logout</b>
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

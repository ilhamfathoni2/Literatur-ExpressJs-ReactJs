import React, { useContext } from "react";
import { Container, Nav, Image } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import Logo from "../../src-assets/Logo.png";

import "./nav.css";

function Navbar() {
  const history = useHistory();

  const [, dispatch] = useContext(UserContext);

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch({
      type: "LOGOUT",
    });
    history.push("/");
  };

  return (
    <>
      <Container>
        <Nav className="mt-4 d-flex justify-content-between center-items">
          <div className="d-flex justify-content-start">
            <Nav.Item>
              <Link to="/home">Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/profile">Profile</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/my-collection">My Collection</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/add-literatur">Add Literature</Link>
            </Nav.Item>
            <Nav.Item onClick={handleLogout}>
              <h6 className="nav-logout">Logout</h6>
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

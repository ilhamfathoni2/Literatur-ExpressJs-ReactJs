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
          <div className="d-flex justify-content-start align-items-center">
            <Nav.Item>
              <Link to="/home">
                <Image src={Logo} className="mn-t-2" />
              </Link>
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
          </div>
          <Nav.Item
            onClick={handleLogout}
            className="d-flex justify-content-end"
          >
            <h6 className="nav-logout">Logout</h6>
          </Nav.Item>
        </Nav>
      </Container>
    </>
  );
}

export default Navbar;

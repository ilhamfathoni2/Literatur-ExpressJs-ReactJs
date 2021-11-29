import React, { useState, useContext } from "react";
import { Container, Modal, Button, Form, Image, Alert } from "react-bootstrap";
import { UserContext } from "../context/userContext";
import { useHistory } from "react-router";
import { API } from "../config/api";

import "./authpage.css";
import books from "../src-assets/books.png";
import logo from "../src-assets/Logo.png";

function AuthPage() {
  document.title = "Literatur";

  let history = useHistory();

  const [shows, setShows] = useState(false);
  const [show, setShow] = useState(false);

  const handleCloses = () => setShows(false);
  const handleShows = () => setShows(true);

  const openSignUp = () => {
    setShows(false);
    setShow(true);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const openLogin = () => {
    setShow(false);
    setShows(true);
  };

  const [, dispatch] = useContext(UserContext);

  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    gender: "",
  });

  const { fullName, email, password, phone, address, gender } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify(form);

      const response = await API.post("/register", body, config);

      // Notification
      if (response.data.status === "success") {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data,
        });

        let userData = JSON.stringify(response.data.data);
        localStorage.setItem("users", userData);

        if (response.data.role === "admin") {
          history.push("/verification");
        } else {
          history.push("/home");
        }

        const alert = (
          <Alert variant="success" className="py-1">
            Success
          </Alert>
        );
        setMessage(alert);
        setForm({
          fullName: "",
          email: "",
          password: "",
          phone: "",
          address: "",
          gender: "",
        });
      } else {
        const alert = (
          <Alert variant="danger" className="py-1">
            Failed
          </Alert>
        );
        setMessage(alert);
      }
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Failed
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  };

  const [formLogin, setFormLogin] = useState({
    emails: "",
    passwords: "",
  });

  const signIn = {
    email: formLogin.emails,
    password: formLogin.passwords,
  };

  const handleChanges = (e) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify(signIn);

      const response = await API.post("/login", body, config);

      if (response.status === 200) {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.data,
        });

        let userData = JSON.stringify(response.data.data);
        localStorage.setItem("users", userData);

        if (response.data.data.role === "admin") {
          history.push("/verification");
        } else {
          history.push("/home");
        }

        const alert = (
          <Alert variant="success" className="py-1">
            Login success
          </Alert>
        );
        setMessage(alert);
      }
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Login failed
        </Alert>
      );
      setMessage(alert);
    }
  };

  return (
    <>
      <Container>
        <Image src={logo} className="logo" />
        <div className="d-flex justify-content-between cv">
          <div className="cover">
            <h1 className="title">source of intelligence</h1>
            <p className="slug mt-3">
              Sign-up and receive unlimited accesss to all of your literatur -
              share your literature.
            </p>
            <div className="btn-auth mt-3">
              <Button className="sign-up" onClick={handleShow}>
                Sign Up
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Body className="bg-blacks">
                  <Container>
                    <h4 className="title-sign-up mb-5 mt-4">Sign Up</h4>
                    {message && message}
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3 mt-2">
                        <Form.Control
                          type="email"
                          placeholder="Email"
                          value={email}
                          name="email"
                          onChange={handleChange}
                          className="form-self"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          value={password}
                          name="password"
                          onChange={handleChange}
                          className="form-self"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="Full Name"
                          value={fullName}
                          name="fullName"
                          onChange={handleChange}
                          className="form-self"
                        />
                      </Form.Group>
                      <Form.Select
                        className="form-self-black mb-3"
                        aria-label="Default select example"
                        value={gender}
                        name="gender"
                        onChange={handleChange}
                      >
                        <option>Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </Form.Select>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="number"
                          placeholder="Phone"
                          value={phone}
                          name="phone"
                          onChange={handleChange}
                          className="form-self"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="Address"
                          value={address}
                          name="address"
                          onChange={handleChange}
                          className="form-self"
                        />
                      </Form.Group>
                      <Button className="btn-new-signup" type="submit">
                        Sign Up
                      </Button>
                      <p className="foot">
                        Already have an account ? Klik{" "}
                        <b className="klik" onClick={openLogin}>
                          Here
                        </b>
                      </p>
                    </Form>
                  </Container>
                </Modal.Body>
              </Modal>

              <Button className="sign-in" onClick={handleShows}>
                Sign In
              </Button>

              <Modal show={shows} onHide={handleCloses}>
                <Modal.Body className="bg-blacks">
                  <Container>
                    <h4 className="title-sign-up mb-5 mt-4">Sign In</h4>
                    <Form onSubmit={handleLogin}>
                      <Form.Group className="mb-3 mt-2">
                        <Form.Control
                          type="email"
                          placeholder="Email"
                          value={formLogin.emails}
                          name="emails"
                          onChange={handleChanges}
                          className="form-self"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          value={formLogin.passwords}
                          name="passwords"
                          onChange={handleChanges}
                          className="form-self"
                        />
                      </Form.Group>

                      <Button className="btn-new-signup" type="submit">
                        Sign In
                      </Button>
                      <p className="foot">
                        Don't have an account ? Klik{" "}
                        <b className="klik" onClick={openSignUp}>
                          Here
                        </b>
                      </p>
                    </Form>
                  </Container>
                </Modal.Body>
              </Modal>
            </div>
          </div>
          <div className="img-cover">
            <Image src={books} className="img-book" />
          </div>
        </div>
      </Container>
    </>
  );
}

export default AuthPage;

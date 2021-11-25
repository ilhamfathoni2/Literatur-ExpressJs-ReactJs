import React, { useState } from "react";
import { Container, Modal, Button, Form, Image } from "react-bootstrap";

import "./authpage.css";
import books from "../src-assets/books.png";
import logo from "../src-assets/Logo.png";
// import SignUp from "../commponent/auth/SignUp";
// import SignIn from "../commponent/auth/SignIn";

function AuthPage() {
  const title = "Home";
  document.title = "Literatur | " + title;

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
                    <Form>
                      <Form.Group className="mb-3 mt-2">
                        <Form.Control
                          type="email"
                          placeholder="Email"
                          className="form-self"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          className="form-self"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="Full Name"
                          className="form-self"
                        />
                      </Form.Group>
                      <Form.Select
                        className="form-self-black mb-3"
                        aria-label="Default select example"
                      >
                        <option>Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </Form.Select>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="number"
                          placeholder="Phone"
                          className="form-self"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="Address"
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
                    <Form>
                      <Form.Group className="mb-3 mt-2">
                        <Form.Control
                          type="email"
                          placeholder="Email"
                          className="form-self"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="password"
                          placeholder="Password"
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

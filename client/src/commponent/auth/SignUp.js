import React, { useState } from "react";
import { Container, Modal, Button, Form } from "react-bootstrap";
import "./auth.css";

function SignUp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
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
                Already have an account ? Klik <b className="klik">Here</b>
              </p>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SignUp;

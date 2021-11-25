import React, { useState } from "react";
import { Container, Modal, Button, Form } from "react-bootstrap";

import "./auth.css";

function SignIn() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className="sign-in" onClick={handleShow}>
        Sign In
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

              <Button className="btn-new-signup" type="submit">
                Sign In
              </Button>
              <p className="foot">
                Don't have an account ? Klik <b className="klik">Here</b>
              </p>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SignIn;

import React from "react";
import { Container, Image, Button, Form } from "react-bootstrap";
import "./literatur.css";

function FormLiteratur() {
  return (
    <>
      <Container>
        <h1 className="title-litera mt-5 mb-4">Add Literature</h1>
        <Form>
          <Form.Group className="mb-4 mt-4">
            <Form.Control
              type="text"
              placeholder="Title"
              className="form-self"
            />
          </Form.Group>
          <Form.Group className="mb-4 mt-2">
            <Form.Control
              type="text"
              placeholder="Publication Date"
              className="form-self"
            />
          </Form.Group>
          <Form.Group className="mb-4 mt-2">
            <Form.Control
              type="text"
              placeholder="Pages"
              className="form-self"
            />
          </Form.Group>
          <Form.Group className="mb-4 mt-2">
            <Form.Control
              type="text"
              placeholder="ISBN"
              className="form-self"
            />
          </Form.Group>
          <Form.Group className="mb-4 mt-2">
            <Form.Control
              type="text"
              placeholder="Author, Ex : E E Rizky, Astina Haris"
              className="form-self"
            />
          </Form.Group>
          <Form.Group className="mb-4 mt-2">
            <Form.Control
              type="file"
              placeholder="Attache Book File"
              className="form-self width-file"
            />
          </Form.Group>
          <Button className="btn-literatur mt-4 mb-5" type="submit">
            Add Literature
          </Button>
        </Form>
        <div className="mb-5"></div>
      </Container>
    </>
  );
}

export default FormLiteratur;

import React, { useState } from "react";
import { Container, Image, Button, Form, Alert } from "react-bootstrap";

import "./literatur.css";
import { API } from "../../config/api";

function FormLiteratur() {
  const [message, setMessage] = useState(null);

  const [form, setForm] = useState({
    title: "",
    publication_date: "",
    pages: "",
    ISBN: "",
    author: "",
    about: "",
    status: "Waiting Approve",
    attache: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      const body = new FormData();
      body.append("title", form.title);
      body.append("publication_date", form.publication_date);
      body.append("pages", form.pages);
      body.append("ISBN", form.ISBN);
      body.append("author", form.author);
      body.append("about", form.about);
      body.append("status", form.status);
      body.append("attache", form.attache[0]);

      const res = await API.post("/add-literatur", body, config);
      if (res.data.status === "success") {
        const alert = (
          <Alert variant="success" className="py-1">
            Success add new literatur
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

  return (
    <>
      <Container>
        <h1 className="title-litera mt-5 mb-4">Add Literature</h1>
        {message && message}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4 mt-4">
            <Form.Control
              type="text"
              placeholder="Title"
              value={form.title}
              name="title"
              onChange={handleChange}
              className="form-self"
            />
          </Form.Group>
          <Form.Group className="mb-4 mt-2">
            <Form.Control
              type="date"
              placeholder="Publication Date"
              value={form.publication_date}
              name="publication_date"
              onChange={handleChange}
              className="form-self"
            />
          </Form.Group>
          <Form.Group className="mb-4 mt-2">
            <Form.Control
              type="text"
              placeholder="Pages"
              value={form.pages}
              name="pages"
              onChange={handleChange}
              className="form-self"
            />
          </Form.Group>
          <Form.Group className="mb-4 mt-2">
            <Form.Control
              type="text"
              placeholder="ISBN"
              value={form.ISBN}
              name="ISBN"
              onChange={handleChange}
              className="form-self"
            />
          </Form.Group>
          <Form.Group className="mb-4 mt-2">
            <Form.Control
              type="text"
              placeholder="Author, Ex : E E Rizky, Astina Haris"
              value={form.author}
              name="author"
              onChange={handleChange}
              className="form-self"
            />
          </Form.Group>
          <Form.Group className="mb-4 mt-2">
            <Form.Control
              type="file"
              placeholder="Attache Book File"
              name="attache"
              onChange={handleChange}
              className="form-self width-file"
            />
          </Form.Group>
          <Button type="submit" className="btn-literatur mt-4 mb-5">
            Add Literature
          </Button>
        </Form>
        <div className="mb-5"></div>
      </Container>
    </>
  );
}

export default FormLiteratur;

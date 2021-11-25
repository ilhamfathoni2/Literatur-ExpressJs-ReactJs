import React from "react";
import { Container, Image, Form } from "react-bootstrap";
import tumbnal from "../../src-assets/tumbnal.png";

import "./search.css";

function ViewResult() {
  return (
    <>
      <Container>
        <div className="d-flex justify-content-between mt-5">
          <div className="filter">
            <h5 className="anytime mb-3">Anytime</h5>
            <Form.Select
              className="form-self-black mt-3"
              aria-label="Default select example"
            >
              <option value="2020">Since 2020</option>
              <option value="2021">Since 2021</option>
            </Form.Select>
          </div>
          <div className="d-flex flex-wrap justify-content-end">
            <div className="space">
              <Image src={tumbnal} />
              <h5 className="title-book mt-3">Management Sistem</h5>
              <p className="author">Rizky E </p>
              <p className="since">2020</p>
            </div>
            <div className="space">
              <Image src={tumbnal} />
              <h5 className="title-book mt-3">
                Sistem Informasi Standar BAN-PT
              </h5>
              <p className="author">Rizky E </p>
              <p className="since">2020</p>
            </div>
            <div className="space">
              <Image src={tumbnal} />
              <h5 className="title-book mt-3">Management Sistem</h5>
              <p className="author">Rizky E </p>
              <p className="since">2020</p>
            </div>
            <div className="space">
              <Image src={tumbnal} />
              <h5 className="title-book mt-3">Management Sistem</h5>
              <p className="author">Rizky E </p>
              <p className="since">2020</p>
            </div>
            <div className="space">
              <Image src={tumbnal} />
              <h5 className="title-book mt-3">Management Sistem</h5>
              <p className="author">Rizky E </p>
              <p className="since">2020</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ViewResult;

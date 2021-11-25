import React from "react";
import { Container, Image } from "react-bootstrap";
import tumbnal from "../../src-assets/tumbnal.png";

import "./myCollection.css";

function DataCollection() {
  return (
    <>
      <Container>
        <h1 className="title-litera mt-5 mb-4">My Collection</h1>
        <div className="d-flex flex-wrap justify-content-between">
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
            <h5 className="title-book mt-3">Sistem Informasi Standar BAN-PT</h5>
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
      </Container>
    </>
  );
}

export default DataCollection;

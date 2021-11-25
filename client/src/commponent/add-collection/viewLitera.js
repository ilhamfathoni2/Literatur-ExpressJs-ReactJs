import React from "react";
import { Container, Image, Button } from "react-bootstrap";
import collectview from "../../src-assets/addcollect.png";

import iconDownload from "../../src-assets/cloud-computing.png";
import iconCollect from "../../src-assets/mycollect.png";

import "./collect.css";

function PreviewAddCollect() {
  return (
    <>
      <Container>
        <div className="d-flex justify-content-between mt-5 mb-5">
          <div className="collect">
            <Image src={collectview} className="img-view" />
          </div>
          <div className="d-flex flex-column">
            <h1 className="title-desc mb-3">Sistem Informas Standar BAN-PT</h1>
            <h5 className="paragraf mb-4">Haris Astina</h5>
            <h4 className="public-desc mb-3">Publication date</h4>
            <h5 className="paragraf mb-4">April 2020</h5>
            <h4 className="public-desc mb-3">Pages</h4>
            <h5 className="paragraf mb-4">105</h5>
            <h4 className="text-danger mb-3">ISBN</h4>
            <h5 className="paragraf mb-4">1051938392010239</h5>
            <Button className="download">
              Download <Image src={iconDownload} className="icons" />
            </Button>
          </div>
          <div className="btn-collection">
            <Button variant="danger">
              Add My Collection <Image src={iconCollect} className="icons" />
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default PreviewAddCollect;

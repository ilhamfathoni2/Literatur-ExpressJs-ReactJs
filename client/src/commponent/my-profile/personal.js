import React from "react";
import { Container, Image, Button } from "react-bootstrap";
import tumbnal from "../../src-assets/tumbnal.png";

import avatar from "../../src-assets/Avatar.png";
import email from "../../src-assets/email.png";
import gender from "../../src-assets/Gender.png";
import phone from "../../src-assets/phone.png";
import map from "../../src-assets/map.png";

import "./profile.css";

function Personal() {
  return (
    <>
      <Container>
        <h1 className="title-litera mt-5 mb-4">Profile</h1>
        <div className="d-flex flex-wrap justify-content-between color-dark">
          <div className="d-flex flex-column">
            <div className="rows">
              <div className="icon">
                <Image src={email} />
              </div>
              <div className="details">
                <h6 className="color-light mb-1">ilham@gmail.com</h6>
                <p className="color-second mt-0">Email</p>
              </div>
            </div>
            <div className="rows">
              <div className="icon">
                <Image src={gender} />
              </div>
              <div className="details">
                <h6 className="color-light mb-1">Male</h6>
                <p className="color-second mt-0">Gender</p>
              </div>
            </div>
            <div className="rows">
              <div className="icon">
                <Image src={phone} />
              </div>
              <div className="details">
                <h6 className="color-light mb-1">0821293829387</h6>
                <p className="color-second mt-0">Phone</p>
              </div>
            </div>
            <div className="rows">
              <div className="icon">
                <Image src={map} />
              </div>
              <div className="details">
                <h6 className="color-light mb-1">Jl. Meta</h6>
                <p className="color-second mt-0">Address</p>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column">
            <Image src={avatar} className="mb-3 width-profile" />
            <Button className="btn-change-profile">Change Photo Profile</Button>
          </div>
        </div>
        <h1 className="title-litera mt-5 mb-4">My Literature</h1>
        <div className="d-flex flex-wrap justify-content-between">
          <div className="spaces">
            <Image src={tumbnal} />
            <h5 className="title-book mt-3">Management Sistem</h5>
            <p className="author">Rizky E </p>
            <p className="since">2020</p>
          </div>
          <div className="spaces">
            <Image src={tumbnal} />
            <h5 className="title-book mt-3">Sistem Informasi Standar BAN-PT</h5>
            <p className="author">Rizky E </p>
            <p className="since">2020</p>
          </div>
          <div className="spaces">
            <Image src={tumbnal} />
            <h5 className="title-book mt-3">Management Sistem</h5>
            <p className="author">Rizky E </p>
            <p className="since">2020</p>
          </div>
          <div className="spaces">
            <Image src={tumbnal} />
            <h5 className="title-book mt-3">Management Sistem</h5>
            <p className="author">Rizky E </p>
            <p className="since">2020</p>
          </div>
          <div className="spaces">
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

export default Personal;

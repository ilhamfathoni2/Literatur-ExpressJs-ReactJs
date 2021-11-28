import React, { useState } from "react";
import { useHistory } from "react-router";
import { Container, Image, Button, Form } from "react-bootstrap";

import email from "../../src-assets/email.png";
import gender from "../../src-assets/Gender.png";
import phone from "../../src-assets/phone.png";
import map from "../../src-assets/map.png";
import imgdef from "../../src-assets/Avatar.png";

import "./profile.css";

import { API } from "../../config/api";

function Personal({ item }) {
  let history = useHistory();
  const [preview, setPreview] = useState("");

  const [form, setForm] = useState({
    avatar: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    if (e.target.type === "file") {
      setPreview(e.target.files);
    }
  };

  const updateAvatar = async (e) => {
    try {
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      const body = new FormData();
      body.set("avatar", form.avatar[0]);

      await API.patch(`/users/${item.id}`, body, config);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <h1 className="title-litera mt-5 mb-4">Profile</h1>
        <div className="d-flex flex-wrap justify-content-between color-dark">
          <div className="d-flex flex-column">
            <div className="rows">
              <div className="icon">
                <Image src={email} className="item-icon" />
              </div>
              <div className="details">
                <h6 className="color-light mb-1">{item.fullName}</h6>
                <p className="color-second mt-0">Email</p>
              </div>
            </div>
            <div className="rows">
              <div className="icon">
                <Image src={gender} className="item-icon" />
              </div>
              <div className="details">
                <h6 className="color-light mb-1">{item.gender}</h6>
                <p className="color-second mt-0">Gender</p>
              </div>
            </div>
            <div className="rows">
              <div className="icon">
                <Image src={phone} className="item-icon" />
              </div>
              <div className="details">
                <h6 className="color-light mb-1">{item.phone}</h6>
                <p className="color-second mt-0">Phone</p>
              </div>
            </div>
            <div className="rows">
              <div className="icon">
                <Image src={map} className="item-icon" />
              </div>
              <div className="details">
                <h6 className="color-light mb-1">{item.address}</h6>
                <p className="color-second mt-0">Address</p>
              </div>
            </div>
          </div>
          <Form onSubmit={updateAvatar}>
            <div className="d-flex flex-column">
              <Image src={item.avatar} className="mb-3 width-profile" />
              <input
                type="file"
                id="files"
                name="avatar"
                onChange={handleChange}
                className="upload-btn form-self-black"
              />
              <Button type="submit" className="btn-change-profile">
                Change Photo Profile
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </>
  );
}

export default Personal;

import React, { useState, useEffect } from "react";

import { Container, Image, Button } from "react-bootstrap";

import email from "../../src-assets/email.png";
import gender from "../../src-assets/Gender.png";
import phone from "../../src-assets/phone.png";
import map from "../../src-assets/map.png";

import "./profile.css";

import { API } from "../../config/api";

function Personal() {
  const [profile, setProfile] = useState([]);

  const getProfle = async () => {
    try {
      const response = await API.get("/user-data");

      setProfile(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfle();
  }, []);

  return (
    <>
      {profile.length !== 0 ? (
        <div>
          {profile.map((item, index) => (
            <Container>
              <h1 className="title-litera mt-5 mb-4">Profile</h1>
              <div className="d-flex flex-wrap justify-content-between color-dark">
                <div className="d-flex flex-column">
                  <div className="rows">
                    <div className="icon">
                      <Image src={email} />
                    </div>
                    <div className="details">
                      <h6 className="color-light mb-1">{item.fullName}</h6>
                      <p className="color-second mt-0">Email</p>
                    </div>
                  </div>
                  <div className="rows">
                    <div className="icon">
                      <Image src={gender} />
                    </div>
                    <div className="details">
                      <h6 className="color-light mb-1">{item.gender}</h6>
                      <p className="color-second mt-0">Gender</p>
                    </div>
                  </div>
                  <div className="rows">
                    <div className="icon">
                      <Image src={phone} />
                    </div>
                    <div className="details">
                      <h6 className="color-light mb-1">{item.phone}</h6>
                      <p className="color-second mt-0">Phone</p>
                    </div>
                  </div>
                  <div className="rows">
                    <div className="icon">
                      <Image src={map} />
                    </div>
                    <div className="details">
                      <h6 className="color-light mb-1">{item.address}</h6>
                      <p className="color-second mt-0">Address</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column">
                  <Image src={item.avatar} className="mb-3 width-profile" />
                  <Button className="btn-change-profile">
                    Change Photo Profile
                  </Button>
                </div>
              </div>
            </Container>
          ))}
        </div>
      ) : (
        <div className="text-center pt-5">
          <div className="mt-3">No data</div>
        </div>
      )}
    </>
  );
}

export default Personal;

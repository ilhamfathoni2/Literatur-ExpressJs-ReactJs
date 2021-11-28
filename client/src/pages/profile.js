import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import MyLiteratures from "../commponent/my-profile/myLiterature";
import Personal from "../commponent/my-profile/personal";
import Navbar from "../commponent/navbar/nav";

import { API } from "../config/api";

function Profile() {
  const title = "Profile";
  document.title = "Literatur | " + title;

  const [profile, setProfile] = useState([]);

  const getProfle = async () => {
    try {
      const response = await API.get("/user-data");
      setProfile(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [literatur, setLiteratur] = useState([]);

  const getLiteratur = async () => {
    try {
      const response = await API.get("/my-literature");

      setLiteratur(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfle();
    getLiteratur();
  }, []);

  return (
    <>
      <Navbar />
      {profile.length !== 0 ? (
        <div>
          {profile.map((item, index) => (
            <Personal item={item} key={index} />
          ))}
        </div>
      ) : (
        <div className="text-center pt-5">
          <div className="mt-3">No data</div>
        </div>
      )}

      {literatur.length !== 0 ? (
        <div>
          <Container>
            <h1 className="title-litera mt-5 mb-4">My Literature</h1>
            <div className="d-flex flex-wrap justify-content-start">
              {literatur.map((item, index) => (
                <MyLiteratures item={item} key={index} />
              ))}
            </div>
          </Container>
        </div>
      ) : (
        <Container>
          <h1 className="title-litera mt-5 mb-4">My Literature</h1>
          <div className="text-center mb-5">
            <h3 className="mt-3">No data</h3>
          </div>
        </Container>
      )}
    </>
  );
}

export default Profile;

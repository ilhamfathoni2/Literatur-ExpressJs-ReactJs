import React, { useState, useEffect } from "react";
import { Container, Image } from "react-bootstrap";
import tumbnal from "../../src-assets/tumbnal.png";
import moment from "moment";

import "./profile.css";
import { API } from "../../config/api";

function MyLiteratures() {
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
    getLiteratur();
  }, []);

  return (
    <>
      {literatur.length !== 0 ? (
        <Container>
          <h1 className="title-litera mt-5 mb-4">My Literature</h1>
          <div className="d-flex flex-wrap justify-content-between">
            {literatur.map((item, index) => (
              <div className="spaces">
                <Image src={tumbnal} />
                <h5 className="title-book mt-3">{item.title}</h5>
                <p className="author">{item.author}</p>
                <p className="since">
                  {moment(item.publication_date).format("YYYY")}
                </p>
              </div>
            ))}
          </div>
        </Container>
      ) : (
        <div className="text-center pt-5">
          <div className="mt-3">No data</div>
        </div>
      )}
    </>
  );
}

export default MyLiteratures;

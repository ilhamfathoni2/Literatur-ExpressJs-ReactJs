import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Navbar from "../commponent/navbar/nav";

import { API } from "../config/api";
import { useParams } from "react-router";
import DetailsMyCollects from "../commponent/my-collection/detailCollet";

function DeetailCollect() {
  const title = "Detail";
  document.title = "Literatur | " + title;

  let { id } = useParams();

  const [literatur, setLiteratur] = useState([]);

  const getLiteratur = async () => {
    try {
      const response = await API.get(`/literatur/${id}`);

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
      <Navbar />
      {literatur.length !== 0 ? (
        <div>
          <Container>
            <h1 className="title-litera mt-5 mb-4">Detail</h1>
            <div className="d-flex flex-wrap justify-content-start">
              {literatur.map((item, index) => (
                <DetailsMyCollects item={item} key={index} />
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

export default DeetailCollect;

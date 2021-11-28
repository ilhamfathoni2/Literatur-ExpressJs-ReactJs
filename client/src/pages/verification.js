import React, { useState, useEffect } from "react";
import { Container, Card, Table } from "react-bootstrap";

import NavAdmin from "../commponent/navbar/navAdmin";
import TableVerify from "../commponent/verifiy/table";
import { API } from "../config/api";

function BookVerification() {
  const title = "Verification";
  document.title = "Literatur | " + title;

  const [literatur, setLiteratur] = useState([]);

  const getLiteratur = async () => {
    try {
      const response = await API.get("/literatur");
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
      <NavAdmin />
      {literatur.length !== 0 ? (
        <Container>
          <h1 className="title-litera mt-5 mb-4">Book verification</h1>
          <Card>
            <Card.Body>
              <Table hover>
                <thead>
                  <tr>
                    <th className="text-center">No.</th>
                    <th>Users or Author</th>
                    <th>ISBN</th>
                    <th>Literatur</th>
                    <th>Status</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {literatur.map((item, index) => (
                    <TableVerify item={item} num={index} key={index} />
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
          <div className="mb-5 mt-5"></div>
        </Container>
      ) : (
        <Container>
          <div className="text-center mb-5">
            <h3 className="mt-3">No data</h3>
          </div>
        </Container>
      )}
    </>
  );
}

export default BookVerification;

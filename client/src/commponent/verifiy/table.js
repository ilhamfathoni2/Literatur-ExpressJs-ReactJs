import React from "react";
import { Container, Button, Table, Card } from "react-bootstrap";

import "./verify.css";

function TableVerify() {
  return (
    <>
      <Container>
        <h1 className="title-litera mt-5 mb-4">Book verification</h1>
        <Card>
          <Card.Body>
            <Table hover>
              <thead>
                <tr>
                  <th className="text-center">No</th>
                  <th>Users or Author</th>
                  <th>ISBN</th>
                  <th>Literatur</th>
                  <th>Status</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">1</td>
                  <td>Tess</td>
                  <td>Tess</td>
                  <td className="text-primary">Tess</td>
                  <td>Tess</td>
                  <td className="text-center">
                    <Button className="btn-dangers">Cancel</Button>
                    <Button className="btn-succes">Approve</Button>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">2</td>
                  <td>Tess</td>
                  <td>Tess</td>
                  <td className="text-primary">Tess</td>
                  <td>Tess</td>
                  <td className="text-center">
                    <Button className="btn-dangers">Cancel</Button>
                    <Button className="btn-succes">Approve</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default TableVerify;

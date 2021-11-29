import { useState, useEffect } from "react";
import DataCollection from "../commponent/my-collection/collection";
import Navbar from "../commponent/navbar/nav";
import { Container } from "react-bootstrap";

import { API } from "../config/api";

function MyCollection() {
  const title = "My Collection";
  document.title = "Literatur | " + title;

  const [collection, setCollection] = useState([]);

  const getMyCollection = async () => {
    try {
      const response = await API.get("/collections");
      setCollection(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMyCollection();
  }, []);

  return (
    <>
      <Navbar />
      {collection.length !== 0 ? (
        <div>
          <Container>
            <h1 className="title-litera mt-5 mb-4">My Collection</h1>
            <div className="d-flex flex-wrap justify-content-start">
              {collection.map((item, index) => (
                <DataCollection item={item} key={index} />
              ))}
            </div>
          </Container>
        </div>
      ) : (
        <Container>
          <h1 className="title-litera mt-5 mb-5">My Collection</h1>
          <h4 className="text-center">No data</h4>
        </Container>
      )}
    </>
  );
}

export default MyCollection;

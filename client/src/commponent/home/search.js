import React, { useState } from "react";

import {
  Container,
  Image,
  InputGroup,
  FormControl,
  Form,
  Button,
  Alert,
} from "react-bootstrap";

import LogoBG from "../../src-assets/searchliteratur.png";
import icon from "../../src-assets/btn-search.png";

import "./home.css";
import moment from "moment";

import { API } from "../../config/api";
import { Link } from "react-router-dom";

function Search() {
  const [message, setMessage] = useState(null);

  const [searchTitle, setsearchTitle] = useState("");

  const [result, setResult] = useState([]);
  const [search, setSearch] = useState({
    title: "",
  });

  const dataBody = {
    title: search.title,
  };

  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify(dataBody);

      const response = await API.post("/search-literatur", body, config);

      setResult(response.data.data);

      console.log(response.data.data);
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Login failed
        </Alert>
      );
      setMessage(alert);
    }
  };

  return (
    <>
      {result.length !== 0 ? (
        <div>
          <Container>
            <Form onSubmit={handleSearch}>
              <InputGroup className="width-min mt-4">
                <FormControl
                  name="title"
                  onChange={handleChange}
                  placeholder="Search for literature"
                />
                <Button type="submit" variant="danger">
                  <Image src={icon} />
                </Button>
              </InputGroup>
            </Form>
          </Container>
          <Container>
            <div className="d-flex justify-content-between mt-5">
              <div className="filter">
                <h5 className="anytime mb-3">Anytime</h5>
                <Form.Select
                  className="form-self-black mt-3"
                  aria-label="Default select example"
                  onChange={(event) => {
                    setsearchTitle(event.target.value);
                  }}
                >
                  <option value="">Anytime</option>
                  <option value="2017">2017</option>
                  <option value="2018">2018</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                </Form.Select>
              </div>
              <div className="d-flex flex-wrap justify-content-end">
                {result
                  .filter((item) => {
                    if (searchTitle === "") {
                      return item;
                    } else if (
                      item.publication_date
                        .toLowerCase()
                        .includes(searchTitle.toLowerCase())
                    ) {
                      return item;
                    }
                  })
                  .map((item, index) => (
                    <div className="space">
                      <iframe src={item.attache} className="views-pdf" />
                      <Link to={`/add-collection/${item.id}`}>
                        <h5 className="title-book mt-3">{item.title}</h5>
                        <p className="author">{item.author}</p>
                        <p className="since">
                          {moment(item.publication_date).format("YYYY")}
                        </p>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          </Container>
        </div>
      ) : (
        <Container>
          <div className="d-flex justify-content-center mt-8 mb-5">
            <Image src={LogoBG} />
          </div>
          <div className="d-flex justify-content-center mb-3 mt-3">
            {message && message}
            <Form onSubmit={handleSearch}>
              <InputGroup className="width-mins">
                <FormControl
                  name="title"
                  onChange={handleChange}
                  placeholder="Search for literature"
                />
                <Button type="submit" variant="danger">
                  <Image src={icon} />
                </Button>
              </InputGroup>
            </Form>
          </div>
        </Container>
      )}
    </>
  );
}

export default Search;

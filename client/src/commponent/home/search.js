import React from "react";
import {
  Container,
  Image,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import LogoBG from "../../src-assets/searchliteratur.png";
import icon from "../../src-assets/btn-search.png";

import "./home.css";

function Search() {
  return (
    <>
      <Container>
        <div className="d-flex justify-content-center mt-8 mb-5">
          <Image src={LogoBG} />
        </div>
        <div className="d-flex justify-content-center mb-3 mt-3">
          <InputGroup className="width-min">
            <FormControl placeholder="Search for literature" />
            <Button variant="danger">
              <Image src={icon} />
            </Button>
          </InputGroup>
        </div>
      </Container>
    </>
  );
}

export default Search;

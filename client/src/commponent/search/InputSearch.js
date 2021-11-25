import React from "react";
import {
  Container,
  Image,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import icon from "../../src-assets/btn-search.png";

import "./search.css";

function InputSearch() {
  return (
    <>
      <Container>
        <InputGroup className="width-min mt-4">
          <FormControl placeholder="Search for literature" />
          <Button variant="danger">
            <Image src={icon} />
          </Button>
        </InputGroup>
      </Container>
    </>
  );
}

export default InputSearch;

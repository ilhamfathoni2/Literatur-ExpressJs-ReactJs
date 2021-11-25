import { Container } from "react-bootstrap";

import Navbar from "../commponent/navbar/nav";
import Search from "../commponent/home/search";

function Home() {
  return (
    <>
      <Container>
        <Navbar />
        <Search />
      </Container>
    </>
  );
}

export default Home;

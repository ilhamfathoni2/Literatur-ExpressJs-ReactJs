import { Container } from "react-bootstrap";

import Navbar from "../commponent/navbar/nav";
import Search from "../commponent/home/search";

function Home() {
  const title = "Home";
  document.title = "Literatur | " + title;

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

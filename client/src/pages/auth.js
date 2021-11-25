import { Container, Image } from "react-bootstrap";
import "./authpage.css";
import books from "../src-assets/books.png";
import logo from "../src-assets/Logo.png";
import SignUp from "../commponent/auth/SignUp";
import SignIn from "../commponent/auth/SignIn";

function AuthPage() {
  const title = "Home";
  document.title = "Literatur | " + title;

  return (
    <>
      <Container>
        <Image src={logo} className="logo" />
        <div className="d-flex justify-content-between cv">
          <div className="cover">
            <h1 className="title">source of intelligence</h1>
            <p className="slug mt-3">
              Sign-up and receive unlimited accesss to all of your literatur -
              share your literature.
            </p>
            <div className="btn-auth mt-3">
              <SignUp />
              <SignIn />
            </div>
          </div>
          <div className="img-cover">
            <Image src={books} className="img-book" />
          </div>
        </div>
      </Container>
    </>
  );
}

export default AuthPage;

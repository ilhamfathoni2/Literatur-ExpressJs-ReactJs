// import { Container, Image } from "react-bootstrap";
// import tumbnal from "../../src-assets/tumbnal.png";
import moment from "moment";

import "./profile.css";

function MyLiteratures({ item }) {
  return (
    <>
      <div className="spaces">
        <iframe src={item.attache} className="view-pdf" />
        <h5 className="title-book mt-3">{item.title}</h5>
        <p className="author">{item.author}</p>
        <p className="since">{moment(item.publication_date).format("YYYY")}</p>
      </div>
    </>
  );
}

export default MyLiteratures;

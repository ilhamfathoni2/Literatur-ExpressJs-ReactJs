import { Container, Image, Button } from "react-bootstrap";

import iconDownload from "../../src-assets/cloud-computing.png";

import "../../commponent/add-collection/collect.css";
import moment from "moment";

function DetailMyLiteratur({ item }) {
  return (
    <>
      <Container>
        <div className="d-flex justify-content-between mt-5 mb-5">
          <div className="collect">
            <iframe src={item.attache} className="img-view" />
          </div>
          <div className="d-flex flex-column">
            <h1 className="title-desc mb-3">{item.title}</h1>
            <h5 className="paragraf mb-4">{item.author}</h5>
            <h4 className="public-desc mb-3">Publication Date</h4>
            <h5 className="paragraf mb-4">
              {moment(item.publication_date).format("DD MMMM YYYY")}
            </h5>
            <h4 className="public-desc mb-3">Pages</h4>
            <h5 className="paragraf mb-4">{item.pages}</h5>
            <h4 className="text-danger mb-3">ISBN</h4>
            <h5 className="paragraf mb-4">{item.ISBN}</h5>
            <a href={item.attache}>
              <Button className="download">
                Download <Image src={iconDownload} className="icons" />
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </>
  );
}

export default DetailMyLiteratur;

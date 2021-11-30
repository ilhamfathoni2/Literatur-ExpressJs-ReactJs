import { Container, Image, Button } from "react-bootstrap";
import { useHistory } from "react-router";

import iconDownload from "../../src-assets/cloud-computing.png";
import removeIcon from "../../src-assets/remove.png";

import "../../commponent/add-collection/collect.css";
import moment from "moment";
import { API } from "../../config/api";

function DetailsMyCollects({ item }) {
  let history = useHistory();

  const handleDownload = async (fileURL, filename) => {
    try {
      await fetch(fileURL, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((Response) => Response.blob())
        .then((blop) => {
          const url = window.URL.createObjectURL(new Blob([blop]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", `${filename}.pdf`);

          document.body.appendChild(link);

          link.click();

          link.parentNode.removeChild(link);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteMyCollection = async (e) => {
    try {
      await API.delete(`/collections/${item.id}`);
      history.push("/my-collection");
    } catch (error) {
      console.log(error);
    }
  };

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
            <Button
              onClick={() => handleDownload(item.attache, item.title)}
              className="download"
            >
              Download <Image src={iconDownload} className="icons" />
            </Button>
          </div>
          <div className="btn-collection">
            <Button onClick={deleteMyCollection} variant="danger">
              Remove My Collection <Image src={removeIcon} className="icons" />
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default DetailsMyCollects;

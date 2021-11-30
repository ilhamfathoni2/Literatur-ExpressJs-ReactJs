import React from "react";
import { Link } from "react-router-dom";
import "./myCollection.css";
import moment from "moment";

function DataCollection({ item }) {
  return (
    <>
      <div className="spaces">
        <Link to={`/detail-collect/${item.id}`}>
          <iframe src={item.attache} className="view-pdf" />
          <h5 className="title-book mt-3">{item.title}</h5>
          <p className="author">{item.author}</p>
          <p className="since">
            {moment(item.publication_date).format("YYYY")}
          </p>
        </Link>
      </div>
    </>
  );
}

export default DataCollection;

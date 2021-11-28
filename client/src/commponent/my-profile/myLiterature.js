import moment from "moment";
import { Link } from "react-router-dom";

import "./profile.css";

function MyLiteratures({ item }) {
  return (
    <>
      <div className="spaces">
        <iframe src={item.attache} className="view-pdf" />
        <Link to={`/my-literatur/${item.id}`}>
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

export default MyLiteratures;

import { Link } from "react-router-dom";

import "./nav.css";

function FilterStatus() {
  return (
    <>
      <div className="mt-4 mb-4 d-flex flex-row">
        <Link to="/verification">
          <h6 className="text-warning mg-3 hov">Waiting Approve</h6>
        </Link>
        <Link to="/approve">
          <h6 className="text-warning mg-3 hov">Approve</h6>
        </Link>
        <Link to="/cancel">
          <h6 className="text-warning mg-3 hov">Cancel</h6>
        </Link>
      </div>
    </>
  );
}

export default FilterStatus;

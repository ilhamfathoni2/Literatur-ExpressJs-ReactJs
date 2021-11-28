import React, { useState, useEffect } from "react";
import PreviewAddCollect from "../commponent/add-collection/viewLitera";
import Navbar from "../commponent/navbar/nav";

import { useParams } from "react-router";
import { API } from "../config/api";

function AddCollection() {
  const title = "Detail";
  document.title = "Literatur | " + title;

  let { id } = useParams();
  const [details, setDetail] = useState([]);

  const getLiteraturDetail = async () => {
    try {
      const response = await API.get(`/literatur/${id}`);
      setDetail(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLiteraturDetail();
  }, []);

  return (
    <>
      <Navbar />
      {details.length !== 0 ? (
        <div>
          {details.map((item, index) => (
            <PreviewAddCollect item={item} key={index} />
          ))}
        </div>
      ) : (
        <div className="text-center pt-5">
          <div className="mt-3">No data</div>
        </div>
      )}
    </>
  );
}

export default AddCollection;

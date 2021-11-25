import React from "react";
import PreviewAddCollect from "../commponent/add-collection/viewLitera";
import Navbar from "../commponent/navbar/nav";

function AddCollection() {
  const title = "Add Collection";
  document.title = "Literatur | " + title;

  return (
    <>
      <Navbar />
      <PreviewAddCollect />
    </>
  );
}

export default AddCollection;

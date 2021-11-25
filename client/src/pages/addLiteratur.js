import React from "react";
import FormLiteratur from "../commponent/literatur/formLiteratur";
import Navbar from "../commponent/navbar/nav";

function AddLiteratur() {
  const title = "Add Literatur";
  document.title = "Literatur | " + title;

  return (
    <>
      <Navbar />
      <FormLiteratur />
    </>
  );
}

export default AddLiteratur;

import React from "react";
import Navbar from "../commponent/navbar/nav";
import InputSearch from "../commponent/search/InputSearch";
import ViewResult from "../commponent/search/viewResult";

function SearchResult() {
  const title = "Search";
  document.title = "Literatur | " + title;

  return (
    <>
      <Navbar />
      <InputSearch />
      <ViewResult />
    </>
  );
}

export default SearchResult;

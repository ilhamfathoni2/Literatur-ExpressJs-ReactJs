import DataCollection from "../commponent/my-collection/collection";
import Navbar from "../commponent/navbar/nav";

function MyCollection() {
  const title = "My Collection";
  document.title = "Literatur | " + title;

  return (
    <>
      <Navbar />
      <DataCollection />
    </>
  );
}

export default MyCollection;

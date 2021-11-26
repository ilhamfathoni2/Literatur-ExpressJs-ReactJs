import NavAdmin from "../commponent/navbar/navAdmin";
import TableVerify from "../commponent/verifiy/table";

function BookVerification() {
  const title = "Verification";
  document.title = "Literatur | " + title;

  return (
    <>
      <NavAdmin />
      <TableVerify />
    </>
  );
}

export default BookVerification;

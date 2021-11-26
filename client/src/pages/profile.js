import Personal from "../commponent/my-profile/personal";
import Navbar from "../commponent/navbar/nav";

function Profile() {
  const title = "Profile";
  document.title = "Literatur | " + title;

  return (
    <>
      <Navbar />
      <Personal />
    </>
  );
}

export default Profile;

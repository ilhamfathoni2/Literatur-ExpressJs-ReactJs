import MyLiteratures from "../commponent/my-profile/myLiterature";
import Personal from "../commponent/my-profile/personal";
import Navbar from "../commponent/navbar/nav";

function Profile() {
  const title = "Profile";
  document.title = "Literatur | " + title;

  return (
    <>
      <Navbar />
      <Personal />;
      <MyLiteratures />
    </>
  );
}

export default Profile;

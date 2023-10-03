import Navbar from "../features/navbar/Navbar";
import UserProfile from "../features/user/components/UserProfile";

function UserProfilePage() {
  return (
    <div>
      <Navbar>
        <h1 className="mx-auto text-2xl text-center">My Profile</h1>
        <UserProfile></UserProfile>
      </Navbar>
    </div>
  );
}

export default UserProfilePage;

import { useSelector } from "react-redux";
import "../styles/profile.css";

const ProfileScreen = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <div>
      <figure>{userInfo?.userName.charAt(0).toUpperCase()}</figure>
      <span>
        Welcome <strong>{userInfo?.userName}!</strong> You can view this page
        because you're logged in
      </span>
    </div>
  );
};

export default ProfileScreen;

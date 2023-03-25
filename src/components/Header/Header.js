import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useGetDetailsQuery } from "../../app/services/auth/authService";
import { logout, setCredentials } from "../../features/auth/authSlice";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // automatically authenticate user if token is found
  const { data, isFetching } = useGetDetailsQuery("userDetails", {
    pollingInterval: 900000, // 15mins
  });

  useEffect(() => {
    if (data) dispatch(setCredentials(data));
  }, [data, dispatch]);

  return (
    <header id="header" class="header fixed-top d-flex align-items-center">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;

import React from "react";

import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UseContext";
import { useEffect, useState } from "react";
import { CiUser } from "react-icons/ci";
const Top = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    if (window.location.href !== "/" && !isLoaded) {
      navigate("/");
      setIsLoaded(true);
    }
  }, [isLoaded]);
  useEffect(() => {
    if (localStorage.getItem("name")) {
      login(localStorage.getItem("name"));
    }
  }, []);

  const { user, login, logout } = useContext(UserContext);
  const handleLogOut = (e) => {
    e.preventDefault();
    logout(user.name);
    navigate("/");
    toast.success("Đăng xuất thành công");
  };
  return (
    <div>
      <ul className="wrapper__login d-flex align-items-center justify-content-end ">
        {user && user.name ? (
          <>
            <li className="login__item d-flex align-items-center text-capitalize">
              <CiUser className="icon" />
              <span className="login__item_name">{user.name}</span>
            </li>
            <li className="login__item" onClick={handleLogOut}>
              <Link className="login__link" to="/">
                Đăng xuất
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="login__item">
              <Link className="login__link" to="/account/login">
                Đăng nhập
              </Link>
            </li>
            <li className="login__item">
              <Link className="login__link" to="account/register">
                Đăngk ký
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Top;

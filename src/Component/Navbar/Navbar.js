import { useState, useEffect, useContext } from "react";
import "./index.scss";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UseContext";
import { useNavigate } from "react-router-dom";

import { AiFillCaretDown } from "react-icons/ai";
function NavBars() {
  const { user, login, logout } = useContext(UserContext);
  const navigate = useNavigate();
  // get data from local storage then check is Name Login

  useEffect(() => {
    if (localStorage.getItem("name")) {
      login(localStorage.getItem("name"));
    }
  }, []);
  const handleEventUserName = () => {
    const classLogout = document.querySelector(".item__logout");
    classLogout.classList.toggle("active");
  };
  const handleLogOut = (e) => {
    logout(user.name);
    navigate("/");
    e.preventDefault();
    toast.success("Đăng xuất thành công");
  };
  return (
    <nav className="nav">
      <a className="title" to="/">
        QLSV
      </a>
      <ul className="list">
        <li className="item">
          <Link className="item__link" to="/">
            Trang Chủ
          </Link>
        </li>
        {localStorage.getItem("name") && (
          <>
            <li className="item">
              <Link className="item__link" to="/managerstudents">
                Quản lí sinh viên
              </Link>
            </li>
            <li className="item">
              <Link className="item__link" to="/managertution">
                Quản lí học phí
              </Link>
            </li>
            <li className="item">
              <Link className="item__link" to="/managerlearn">
                Học tập
              </Link>
            </li>
            <li className="item">
              <Link className="item__link" to="/managerstudents">
                Quản lí giảng viên
              </Link>
            </li>
            <li className="item">
              <Link className="item__link" to="/managerstudents">
                Các khoa
              </Link>
            </li>
            <li className="item">
              <Link className="item__link" to="/managerstudents">
                Phân quyền truy cập
              </Link>
            </li>
          </>
        )}
        <span className="g"></span>
        {user && user.name ? (
          <>
            <li className="item">
              <span onClick={handleEventUserName} className="item__user-name">
                {user.name}
                <AiFillCaretDown className="icon" />
              </span>
            </li>
            <Link
              className="item__link item__logout"
              to="/"
              onClick={handleLogOut}
            >
              Đăng Xuất
            </Link>
          </>
        ) : (
          <>
            <li className="item">
              <Link className="item__link" to="/account/register">
                Đăng Ký
              </Link>
            </li>
            <li className="item">
              <Link className="item__link" to="/account/login">
                Đăng Nhập
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBars;

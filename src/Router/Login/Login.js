import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ReturnHome from "../../Component/ReturnHome";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
const Login = () => {
  const ApiLogin = "http://localhost:3000/accounts";
  const [listAccounts, setListAccounts] = useState([]);
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");
  //   const history = useHistory();
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    getAccount();
  }, []);
  const Logins = () => {
    return axios.get(ApiLogin);
  };
  const getAccount = async () => {
    let res = await Logins();
    if (res && res.data) {
      setListAccounts(res.data);
    }
  };
  const load = () => {
    const fake = () => {
      document.addEventListener("keydown", () => {
        <Link to="/about"></Link>;
      });
    };
    fake();
  };

  const handleLogin = (e) => {
    e.preventDefault();

    listAccounts.map((item) => {
      const toastID = toast.loading("Đang đăng nhập");
      if (userName == item.userName && userPass == item.userPassword) {
        setIsLogin(true);
        setTimeout(() => {
          toast.dismiss(toastID);
          toast.success("Đăng nhập thành công");
          <ReturnHome show={true}></ReturnHome>;
        }, 2000);
      } else {
        setTimeout(() => {
          toast.dismiss(toastID);
        }, 2000);
        toast.error("lỗi");
      }
    });
  };

  return (
    <div className="d-flex align-items-center justify-content-center ">
      <form className="w-25 mt-5 bg-light py-5 px-5 ">
        <div className="form-group ">
          <input
            value={userName}
            type="text"
            className="form-control"
            autoComplete="userName"
            placeholder="Tên"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <input
            value={userPass}
            type="password"
            className="form-control"
            placeholder="Mật khẩu"
            autoComplete="userPass"
            onChange={(e) => {
              setUserPass(e.target.value);
            }}
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label
            className="form-check-label ms-3 text-black"
            htmlFor="exampleCheck1"
          >
            Nhớ mật khẩu
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-primary me-3"
          onClick={handleLogin}
        >
          Đăng nhập
        </button>
        <button type="submit" className="btn btn-primary">
          <Link
            to="/accout/register"
            className="text-white text-decoration-none"
          >
            Đăng Ký
          </Link>
        </button>
        {listAccounts.map((it, index) => {
          <li key={index}>{it.userName}</li>;
        })}
      </form>
      <ToastContainer />
    </div>
  );
};
export default Login;

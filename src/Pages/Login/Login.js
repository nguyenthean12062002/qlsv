import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import { getAccount, putIsCheckLogin } from "../../Services/ServerAccount";
import { UserContext } from "../../Context/UseContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(UserContext);
  const [listAccounts, setListAccounts] = useState([]);
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");
  useEffect(() => {
    getDataAccount();
  }, [login]);
  async function getDataAccount() {
    const res = await getAccount();
    setListAccounts(res.data);
  }
  const handleLogin = (e) => {
    e.preventDefault();
    getDataAccount();
    const toastID = toast.loading("Đang đăng nhập");
    listAccounts.map((item) => {
      if (userName == item.nameLogin && userPass == item.passLogin) {
        setTimeout(() => {
          toast.dismiss(toastID);
          toast.success("Đăng nhập thành cônng");
          navigate("/");
        }, 2000);
        login(item.nameLogin);
      } else {
        setTimeout(() => {
          toast.dismiss(toastID);
          toast.error("Tài khoản hoặc mật khẩu không đúng");
        }, 2000);
      }
    });
  };

  return (
    <div className="d-flex align-items-center justify-content-center ">
      <form className="w-50 mt-5 bg-light py-5 px-5 ">
        <div className="form-group ">
          <input
            value={userName}
            type="text"
            className="form-control"
            autoComplete="userName"
            placeholder="Tên"
            autoFocus
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
        <button type="submit" className="btn btn-primary" onClick={handleLogin}>
          Đăng nhập
        </button>
        <button type="submit" className="btn btn__register btn-info">
          <Link
            to="/account/register"
            className="text-white text-decoration-none"
          >
            Đăng Ký
          </Link>
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};
export default Login;

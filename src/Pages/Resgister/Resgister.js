import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const Register = () => {
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userAgainPass, setUserAgainPass] = useState("");

  return (
    <>
      <h3 className="my-1">Đăng Ký</h3>
      <div className="d-flex align-items-center justify-content-center ">
        <form className="w-50 mt-5 bg-light py-5 px-5 ">
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
          <div className="form-group ">
            <input
              value={userEmail}
              type="text"
              className="form-control"
              placeholder="Email"
              onChange={(e) => {
                setUserEmail(e.target.value);
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
          <div className="form-group">
            <input
              value={userAgainPass}
              type="password"
              className="form-control"
              placeholder="Nhập lại mật khẩu"
              autoComplete="userAgainPass"
              onChange={(e) => {
                setUserAgainPass(e.target.value);
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
              Đồng ý với điều khoản và dịch vụ
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            <Link
              to="/accout/register"
              className="text-white text-decoration-none"
            >
              Đăng Ký
            </Link>
          </button>
          <div className="d-flex align-items-center justify-content-center">
            <Link
              to="/account/login"
              type="submit"
              //   onClick={handleLogin}
            >
              Đăng nhập
            </Link>
          </div>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};
export default Register;

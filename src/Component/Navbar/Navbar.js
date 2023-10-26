import "./index.scss";
import { Link } from "react-router-dom";
function NavBars() {
  const loadActive = () => {
    const listItems = document.querySelectorAll(".item");
    listItems.forEach((listItem) => {
      listItem.addEventListener("click", () => {
        listItems.forEach((item) => item.classList.remove("active"));
        listItem.classList.add("active");
      });
    });
  };
  loadActive();
  return (
    <nav className="nav d-flex flex-column">
      <a className="title" to="/">
        Quản lý sinh viên
      </a>
      {/* item login */}

      <h4 className="title__menu">Menu</h4>
      <ul className="list">
        <li className="item active">
          <Link className="item__link" to="/">
            Trang Chủ
          </Link>
        </li>
        {localStorage.getItem("name") && (
          <>
            <li className="item ">
              <Link className="item__link" to="/manager/students">
                Sinh Viên
              </Link>
            </li>
            <li className="item">
              <Link className="item__link" to="/manager/tution">
                Học Phí
              </Link>
            </li>
            <li className="item">
              <Link className="item__link" to="/manager/learn">
                Điểm
              </Link>
            </li>
            <li className="item ">
              <Link className="item__link" to="/manager/teacher">
                Giảng Viên
              </Link>
            </li>
            <li className="item">
              <Link className="item__link" to="/manager/department">
                Các Khoa
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
      </ul>
    </nav>
  );
}

export default NavBars;

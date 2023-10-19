import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { postStudents } from "../../Services/StudentServices";
import { ToastContainer, toast } from "react-toastify";
import "./index.scss";
import { useState, useEffect } from "react";
const ModalAddStudents = (props) => {
  const { show, handleClose, handleUpdateStudents } = props;
  const [name, setName] = useState(" ");
  const [codeStudents, setCodeStudents] = useState(" ");
  const [branch, setBranch] = useState(" ");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [numberPhone, setNumberPhone] = useState("");
  const [select, setSelect] = useState("");
  const handleClickAdd = () => {
    postData();
    setName("");
    setAddress("");
    setBranch("");
    setEmail("");
    setNumberPhone("");
  };
  async function postData(
    data = { name, branch, address, email, numberPhone, select }
  ) {
    const response = await postStudents(data);
    let iMess = toast.loading("Đang thêm");
    setTimeout(() => {
      toast.dismiss(iMess);
      toast.success("Thêm thành cônng");
      handleUpdateStudents();
    }, 2000);
  }
  // edit

  return (
    <div className="container" style={{ width: 100 }}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm sinh viên</Modal.Title>
        </Modal.Header>
        <Modal.Body>Nhập thông tin cá nhân đầy đủ dưới đây:</Modal.Body>
        <form>
          <div className="form__wrapper form-row">
            <div className="wrapper form-group col-md-6">
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <label htmlFor="name">Họ và tên</label>
            </div>
            <div className="wrapper form-group col-md-6">
              <input
                type="text"
                className="form-control"
                value={codeStudents}
                onKeyPress={(e) => {
                  const keyCode = e.which || e.keyCode;
                  const validKeyCodes = [8, 9, 13, 27, 46]; // Các key code cho phép (Backspace, Tab, Enter, Esc, Delete)
                  if (keyCode < 48 || keyCode > 57) {
                    // Kiểm tra key code không thuộc khoảng 0-9
                    if (!validKeyCodes.includes(keyCode)) {
                      // Kiểm tra key code không thuộc danh sách các key code cho phép
                      e.preventDefault(); // Ngăn chặn ký tự không hợp lệ được nhập vào
                    }
                  }
                }}
                onChange={(e) => {
                  setCodeStudents(e.target.value);
                }}
              />
              <label htmlFor="name">Mã SV</label>
            </div>

            <div className="wrapper form-group col-md-6">
              <input
                type="text"
                className="form-control"
                value={branch}
                onChange={(e) => {
                  setBranch(e.target.value);
                }}
              />
              <label htmlFor="category">Ngành</label>
            </div>
          </div>
          <div className="wrapper form-group">
            <input
              type="text"
              className="form-control"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
            <label htmlFor="inputAddress">Địa chỉ</label>
          </div>
          <div className="form__wrapper form-row">
            <div className="wrapper form-group col-md-6">
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label htmlFor="inputEmail">Email</label>
            </div>
            <div className="wrapper form-group col-md-6">
              <input
                type="text"
                className="form-control"
                value={numberPhone}
                onKeyPress={(e) => {
                  const keyCode = e.which || e.keyCode;
                  const validKeyCodes = [8, 9, 13, 27, 46]; // Các key code cho phép (Backspace, Tab, Enter, Esc, Delete)
                  if (keyCode < 48 || keyCode > 57) {
                    // Kiểm tra key code không thuộc khoảng 0-9
                    if (!validKeyCodes.includes(keyCode)) {
                      // Kiểm tra key code không thuộc danh sách các key code cho phép
                      e.preventDefault(); // Ngăn chặn ký tự không hợp lệ được nhập vào
                    }
                  }
                }}
                onChange={(e) => {
                  setNumberPhone(e.target.value);
                }}
              />
              <label htmlFor="inputNumber">SDT</label>
            </div>
            <div className="form-group col-md-4">
              <h6 htmlFor="inputState">Khóa</h6>
              <select
                className="form-control"
                value={select}
                onChange={(e) => {
                  setSelect(e.target.value);
                }}
              >
                <option value="K11">K11</option>
                <option value="K12">K12</option>
                <option value="K13">K13</option>
                <option value="K14">K14</option>
              </select>
            </div>
          </div>
        </form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button
            variant="primary"
            onClick={handleClickAdd}
            onMouseUp={handleClose}
          >
            Thêm sinh viên
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </div>
  );
};
export default ModalAddStudents;

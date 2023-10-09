import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { ToastContainer, toast } from "react-toastify";
import "./index.scss";
import { useState, useEffect } from "react";
const ModalAddStudents = (props) => {
  const { show, handleClose, handleUpdateStudents } = props;
  const [name, setName] = useState(" ");
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
    url = "http://localhost:3000/students",
    data = { name, branch, address, email, numberPhone, select }
  ) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const iMess = toast.loading("Đang thêm");
    setTimeout(() => {
      toast.dismiss(iMess);
      toast.success("Thêm thành công");
    }, 2000);
    setTimeout(() => {
      handleUpdateStudents();
      console.log(select);
    }, 2000);
  }
  return (
    <div className="container" style={{ width: 100 }}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm Sinh Viên</Modal.Title>
        </Modal.Header>
        <Modal.Body>Nhập thông tin cá nhân đầy đủ dưới đây: </Modal.Body>
        <form>
          <div class="form__wrapper form-row">
            <div class="wrapper form-group col-md-6">
              <input
                type="text"
                class="form-control"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <label for="name">Họ và tên</label>
            </div>
            <div class="wrapper form-group col-md-6">
              <input
                type="text"
                class="form-control"
                value={branch}
                onChange={(e) => {
                  setBranch(e.target.value);
                }}
              />
              <label for="category">Ngành</label>
            </div>
          </div>
          <div class="wrapper form-group">
            <input
              type="text"
              class="form-control"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
            <label for="inputAddress">Địa chỉ</label>
          </div>
          <div class="form__wrapper form-row">
            <div class="wrapper form-group col-md-6">
              <input
                type="email"
                class="form-control"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label for="inputEmail">Email</label>
            </div>
            <div class="wrapper form-group col-md-6">
              <input
                type="text"
                class="form-control"
                value={numberPhone}
                onChange={(e) => {
                  setNumberPhone(e.target.value);
                }}
              />
              <label for="inputNumber">SDT</label>
            </div>
            <div class="form-group col-md-4">
              <h6 for="inputState">Khóa</h6>
              <select
                class="form-control"
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

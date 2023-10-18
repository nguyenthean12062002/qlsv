import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import { useState, useEffect } from "react";
import { editStudents } from "../../Services/StudentServices";
import { FetchAllStudents } from "../../Services/StudentServices";
const ModalEditStudents = (props) => {
  const { show, isEdit, idEdit, handleClose, handleUpdateStudents } = props;
  const [name, setName] = useState(" ");
  const [branch, setBranch] = useState(" ");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [numberPhone, setNumberPhone] = useState("");
  const [select, setSelect] = useState("");
  useEffect(() => {
    fetch(`http://localhost:3000/students/${idEdit}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setEmail(data.email);
        setAddress(data.address);
        setBranch(data.branch);
        setNumberPhone(data.numberPhone);
        setSelect(data.select);
      });
  }, [isEdit]);
  async function updataData() {
    editStudents(idEdit, {
      name,
      branch,
      address,
      email,
      numberPhone,
      select,
    });
    let res = await FetchAllStudents();
    let iM = toast.loading("Đang cập nhật!");
    setTimeout(() => {
      toast.dismiss(iM);
      toast.success("Cập nhật thành công");
      handleUpdateStudents();
    }, 1500);
  }
  const handleClickUpdateEdit = () => {
    updataData();
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sửa thông tin sinh viên</Modal.Title>
        </Modal.Header>
        <Modal.Body>Nhập các thông tin cần chỉnh sửa:</Modal.Body>
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
            onClick={handleClickUpdateEdit}
            onMouseUp={handleClose}
          >
            Cập nhật thông tin
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalEditStudents;

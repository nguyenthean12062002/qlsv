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
  const [department, setDepartment] = useState(" ");
  const [nationality, setNationality] = useState(" ");
  const [birthDay, setBirthDay] = useState(" ");
  const [sex, setSex] = useState(" ");
  const [branch, setBranch] = useState(" ");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [numberPhone, setNumberPhone] = useState("");
  const [select, setSelect] = useState("");
  const [nation, setNation] = useState("");
  const [graduationPlace, setGraduationPlace] = useState("");
  const [yearGraduationPlace, setYearGraduationPlace] = useState("");
  //
  const [pointLT, setPointLT] = useState(" ");
  const [pointCSDL, setpointCSDL] = useState(" ");
  const [pointCode, setpointCode] = useState(" ");
  const [pointQTCSDL, setpointQTCSDL] = useState(" ");
  const [pointTT, setpointTT] = useState(" ");
  const handleClickAdd = () => {
    postData();
    setName("");
    setDepartment("");
    setBirthDay("");
    setSex("");
    setCodeStudents("");
    setAddress("");
    setBranch("");
    setEmail("");
    setNumberPhone("");
    setNationality("");
    setNation("");
    setYearGraduationPlace("");
    setGraduationPlace("");
    setPointLT("");
    setpointCSDL("");
    setpointCode("");
    setpointTT("");
    setpointQTCSDL("");
  };
  async function postData(
    data = {
      name,
      codeStudents,
      sex,
      department,
      birthDay,
      branch,
      address,
      email,
      numberPhone,
      select,
      nationality,
      yearGraduationPlace,
      graduationPlace,
      nation,
      pointCSDL,
      pointCode,
      pointLT,
      pointQTCSDL,
      pointTT,
    }
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
      <Modal show={show} fullscreen={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm sinh viên</Modal.Title>
        </Modal.Header>
        <form>
          <div className="form__wrapper form-row">
            {/* 1 */}
            <div className="form__wrapper row">
              <div className="wrapper form-group col-sm-4">
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
              <div className="wrapper form-group col-sm-3">
                <input
                  type="date"
                  className="form-control"
                  value={birthDay}
                  onChange={(e) => {
                    setBirthDay(e.target.value);
                  }}
                />
                <label htmlFor="name">Ngày sinh</label>
              </div>
              <div className="wrapper form-group col-sm-3">
                <select
                  className="form-control"
                  value={sex}
                  onChange={(e) => {
                    setSex(e.target.value);
                  }}
                >
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                  <option value="Khác">Khác</option>
                </select>
                <label>Giới tính</label>
              </div>
              <div className="wrapper form-group col-sm-2">
                <select
                  className="form-control"
                  value={nationality}
                  onChange={(e) => {
                    setNationality(e.target.value);
                  }}
                >
                  <option value="Việt Nam">Việt Nam</option>
                  <option value="Khác">Khác</option>
                </select>
                <label>Quốc tịch</label>
              </div>
            </div>
            {/* 2 */}
            <div className="form__wrapper row">
              <div className="wrapper form-group col-md-6">
                <input
                  type="text"
                  className="form-control"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
                <label htmlFor="inputAddress">Nơi cư trú:</label>
              </div>
              <div className="wrapper form-group col-2">
                <input
                  type="text"
                  className="form-control"
                  value={nation}
                  onChange={(e) => {
                    setNation(e.target.value);
                  }}
                />
                <label htmlFor="inputAddress">Dân tộc:</label>
              </div>
            </div>
            {/* 3 */}
            <div className="form__wrapper row">
              <div className="wrapper form-group col-sm-2">
                <input
                  type="text"
                  className="form-control"
                  value={yearGraduationPlace}
                  onChange={(e) => {
                    setYearGraduationPlace(e.target.value);
                  }}
                />
                <label htmlFor="name">Năm tốt nghiệp:</label>
              </div>
              <div className="wrapper form-group col-md-6">
                <input
                  type="text"
                  className="form-control"
                  value={graduationPlace}
                  onChange={(e) => {
                    setGraduationPlace(e.target.value);
                  }}
                />
                <label htmlFor="name">Nơi tốt nghiệp(tên trường):</label>
              </div>
            </div>
            {/* 4 */}
            <div className="form__wrapper row">
              <div className="wrapper form-group col-sm-1">
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
                <label htmlFor="inputState">Khóa:</label>
              </div>
              <div className="wrapper form-group col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  value={department}
                  onChange={(e) => {
                    setDepartment(e.target.value);
                  }}
                />
                <label htmlFor="name">Khoa:</label>
              </div>
              <div className="wrapper form-group col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  value={branch}
                  onChange={(e) => {
                    setBranch(e.target.value);
                  }}
                />
                <label htmlFor="category">Chuyên ngành:</label>
              </div>
            </div>
            {/* 5 */}
            <div className="form__wrapper row">
              <div className="wrapper form-group col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  value={codeStudents}
                  onChange={(e) => {
                    setCodeStudents(e.target.value);
                  }}
                />
                <label htmlFor="name">Mã SV</label>
              </div>
              {/* <div className="wrapper form-group col-sm-3">
                <input
                  type="text"
                  className="form-control"
                  value={codeStudents}
                  onChange={(e) => {
                    setCodeStudents(e.target.value);
                  }}
                />
                <label htmlFor="name">Mã SV</label>
              </div> */}
            </div>
            {/* 6 */}
            <div className="form__wrapper row">
              <div className="wrapper form-group col-sm-3">
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <label htmlFor="inputEmail">Email:</label>
              </div>
              <div className="wrapper form-group col-sm-3">
                <input
                  type="tel"
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
                <label htmlFor="inputNumber">Số điện thoại:</label>
              </div>
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

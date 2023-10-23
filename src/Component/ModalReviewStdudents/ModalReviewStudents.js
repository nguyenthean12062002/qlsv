import React from "react";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
const ModalReviewStudents = (props) => {
  const { show, idReview, handleClose } = props;

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
  useEffect(() => {
    fetch(`https://4rhqkq-8080.csb.app/students/${idReview}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setBirthDay(data.birthDay);
        setAddress(data.address);
        setSex(data.sex);
        setNationality(data.nationality);
        setNation(data.nation);
        setYearGraduationPlace(data.yearGraduationPlace);
        setGraduationPlace(data.graduationPlace);
        setSelect(data.select);
        setDepartment(data.department);
        setBranch(data.branch);
        setCodeStudents(data.codeStudents);
        setEmail(data.email);
        setNumberPhone(data.numberPhone);
      });
  }, [idReview]);

  return (
    <div>
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
                    disabled
                    type="text"
                    className="form-control"
                    value={name}
                  />
                  <label htmlFor="name">Họ và tên</label>
                </div>
                <div className="wrapper form-group col-sm-3">
                  <input
                    disabled
                    type="date"
                    className="form-control"
                    value={birthDay}
                  />
                  <label htmlFor="name">Ngày sinh</label>
                </div>
                <div className="wrapper form-group col-sm-3">
                  <select className="form-control" value={sex} disabled>
                    <option value="Nam">Nam</option>
                    <option value="Nữ">Nữ</option>
                    <option value="Khác">Khác</option>
                  </select>
                  <label>Giới tính</label>
                </div>
                <div className="wrapper form-group col-sm-2">
                  <select className="form-control" value={nationality} disabled>
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
                    disabled
                    type="text"
                    className="form-control"
                    value={address}
                  />
                  <label htmlFor="inputAddress">Nơi cư trú:</label>
                </div>
                <div className="wrapper form-group col-2">
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    value={nation}
                  />
                  <label htmlFor="inputAddress">Dân tộc:</label>
                </div>
              </div>
              {/* 3 */}
              <div className="form__wrapper row">
                <div className="wrapper form-group col-sm-2">
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    value={yearGraduationPlace}
                  />
                  <label htmlFor="name">Năm tốt nghiệp:</label>
                </div>
                <div className="wrapper form-group col-md-6">
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    value={graduationPlace}
                  />
                  <label htmlFor="name">Nơi tốt nghiệp(tên trường):</label>
                </div>
              </div>
              {/* 4 */}
              <div className="form__wrapper row">
                <div className="wrapper form-group col-sm-1">
                  <select className="form-control" value={select} disabled>
                    <option value="K11">K11</option>
                    <option value="K12">K12</option>
                    <option value="K13">K13</option>
                    <option value="K14">K14</option>
                  </select>
                  <label htmlFor="inputState">Khóa:</label>
                </div>
                <div className="wrapper form-group col-sm-3">
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    value={department}
                  />
                  <label htmlFor="name">Khoa:</label>
                </div>
                <div className="wrapper form-group col-sm-3">
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    value={branch}
                  />
                  <label htmlFor="category">Chuyên ngành:</label>
                </div>
              </div>
              {/* 5 */}
              <div className="form__wrapper row">
                <div className="wrapper form-group col-sm-3">
                  <input
                    disabled
                    type="text"
                    className="form-control"
                    value={codeStudents}
                  />
                  <label htmlFor="name">Mã SV</label>
                </div>
                {/* <div className="wrapper form-group col-sm-3">
            <input 
                disabled
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
                    disabled
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
                    disabled
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
        </Modal>
      </div>
    </div>
  );
};

export default ModalReviewStudents;

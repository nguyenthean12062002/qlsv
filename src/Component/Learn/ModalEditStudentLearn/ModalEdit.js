import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { editStudents } from "../../../Services/StudentServices";
export const ModalEdit = (props) => {
  const { show, handleClose, isEdit, Id, handleUpdateStudents } = props;
  const [name, setName] = useState(" ");
  const [codeStudents, setCodeStudents] = useState(" ");
  const [pointLT, setPointLT] = useState(" ");
  const [pointCSDL, setpointCSDL] = useState(" ");
  const [pointCode, setpointCode] = useState(" ");
  const [pointQTCSDL, setpointQTCSDL] = useState(" ");
  const [pointTT, setpointTT] = useState(" ");
  const [idEdit, setIdEdit] = useState("");
  useEffect(() => {
    fetch(`https://4rhqkq-8080.csb.app/students/${Id}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setCodeStudents(data.codeStudents);
        setPointLT(data.pointLT);
        setpointCSDL(data.pointCSDL);
        setpointCode(data.pointCode);
        setpointQTCSDL(data.pointQTCSDL);
        setpointTT(data.pointTT);
      });
  }, [isEdit]);
  async function updateData() {
    editStudents(Id, {
      name,
      codeStudents,
      pointCSDL,
      pointCode,
      pointQTCSDL,
      pointTT,
      pointLT,
    });
    let iM = toast.loading("Đang cập nhật điểm!");
    setTimeout(() => {
      toast.dismiss(iM);
      toast.success("Cập nhật điẻm thành công");
      handleUpdateStudents();
    }, 1500);
  }
  const handleClickUpdateEdit = () => {
    updateData();
  };
  return (
    <div className="container" style={{ width: 100 }}>
      <Modal show={show} fullscreen={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sửa điểm sinh viên</Modal.Title>
        </Modal.Header>
        <form>
          <div className="form__wrapper form-row">
            <div className="wrapper form-group col-sm-3">
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
          </div>
          <div className="form__wrapper form-row">
            <div className="wrapper form-group col-sm-3">
              <input
                type="text"
                className="form-control"
                value={pointLT}
                onChange={(e) => {
                  setPointLT(e.target.value);
                }}
              />
              <label htmlFor="name">Điểm nhập môn lập trình</label>
            </div>
            <div className="wrapper form-group col-sm-3">
              <input
                type="text"
                className="form-control"
                value={pointCode}
                onChange={(e) => {
                  setpointCode(e.target.value);
                }}
              />
              <label htmlFor="name">Điểm lập trình</label>
            </div>
            <div className="wrapper form-group col-sm-3">
              <input
                type="text"
                className="form-control"
                value={pointCSDL}
                onChange={(e) => {
                  setpointCSDL(e.target.value);
                }}
              />
              <label htmlFor="name">Điểm cơ sở dữ liệu</label>
            </div>
            <div className="wrapper form-group col-sm-3">
              <input
                type="text"
                className="form-control"
                value={pointQTCSDL}
                onChange={(e) => {
                  setpointQTCSDL(e.target.value);
                }}
              />
              <label htmlFor="name">Điểm hệ QT CSDL</label>
            </div>
            <div className="wrapper form-group col-sm-3">
              <input
                type="text"
                className="form-control"
                value={pointTT}
                onChange={(e) => {
                  setpointTT(e.target.value);
                }}
              />
              <label htmlFor="name">Điểm thuật toán</label>
            </div>
          </div>
        </form>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button
            onClick={handleClickUpdateEdit}
            onMouseUp={handleClose}
            variant="primary"
          >
            Cập nhật thông tin
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </div>
  );
};

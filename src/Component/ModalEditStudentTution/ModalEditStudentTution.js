import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { editStudents } from "../../Services/StudentServices";
const ModalEditStudentsTution = (props) => {
  const { show, isEdit, idEdit, handleClose, handleUpdateStudents } = props;
  const [name, setName] = useState(" ");
  const [codeStudents, setCodeStudents] = useState(" ");
  const [branch, setBranch] = useState(" ");
  const [tution, setTution] = useState("");
  const [subTution, setSubTution] = useState("");
  const [dateTution, setDateTution] = useState("");
  useEffect(() => {
    fetch(`https://4rhqkq-8080.csb.app/students/${idEdit}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setCodeStudents(data.codeStudents);
        setBranch(data.branch);
        setTution(data.tution);
        setSubTution(data.subTution);
        setDateTution(data.dateTution);
      });
  }, [isEdit]);
  async function updataData() {
    editStudents(idEdit, {
      name,
      codeStudents,
      branch,
      tution,
      subTution,
      dateTution,
    });
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
    <div className="container" style={{ width: 100 }}>
      <Modal show={show} onHide={handleClose} fullscreen={true}>
        <Modal.Header closeButton>
          <Modal.Title>Sửa học phí sinh viên</Modal.Title>
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
                value={codeStudents}
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
              value={tution}
              onChange={(e) => {
                setTution(e.target.value);
              }}
            />
            <label htmlFor="inputAddress">Học phí</label>
          </div>
          <div className="form__wrapper form-row">
            <div className="wrapper form-group col-md-6">
              <input
                type="text"
                className="form-control"
                value={subTution}
                onChange={(e) => {
                  setSubTution(e.target.value);
                }}
              />
              <label htmlFor="inputEmail">Phụ phí</label>
            </div>
            <div className="wrapper form-group col-md-6">
              <input
                type="text"
                className="form-control"
                value={dateTution}
                onChange={(e) => {
                  setDateTution(e.target.value);
                }}
              />
              <label htmlFor="inputNumber">Ngày thu</label>
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
    </div>
  );
};
export default ModalEditStudentsTution;

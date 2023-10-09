import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { ToastContainer, toast } from "react-toastify";

import {
  FetchAllStudents,
  deleteStudents,
} from "../../Services/StudentServices";
import ModalAddStudents from "../ModalAddStudents/ModalAddStudents.js";
const DataAcc = ({ props }) => {
  const [listStudents, setListStudents] = useState([]);
  useEffect(() => {
    getStudent();
  }, []);
  // get data
  const getStudent = async () => {
    let res = await FetchAllStudents();
    if (res && res.data) {
      setListStudents(res.data);
    }
  };
  //show modal add
  const [isShowModalAddStudents, setShowModalAddStudents] = useState(false);
  const handleShow = () => {
    setShowModalAddStudents(true);
  };
  const handleClose = () => {
    setShowModalAddStudents(false);
  };

  const handleUpdateStudents = () => {
    getStudent();
  };
  //show modal printf
  const handlePrintf = () => {
    window.print();
  };
  //deleteStudents
  const handleDeleteStudents = (e) => {
    let index = e.target.dataset.index;
    deleteStudents(index);
    setTimeout(() => {
      getStudent();
      toast.warning("Xóa thành công");
    }, 1000);
  };
  return (
    <div className="w-100">
      <div className="w-100 h-10 d-flex my-3 justify-content-between">
        <h3>Danh sách sinh viên:</h3>
        <div>
          <button
            className="btn btn-info text-white"
            onClick={handlePrintf}
            size="sm"
          >
            In DS
          </button>
          <button className="btn btn-success" onClick={handleShow} size="sm">
            Thêm Sinh Viên
          </button>
        </div>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Stt</th>
            <th>Họ và Tên</th>
            <th>Ngành</th>
            <th>Khóa</th>
            <th>Địa chỉ</th>
            <th>Email</th>
            <th>SDT</th>
            <th>Tùy chọn</th>
          </tr>
        </thead>
        <tbody>
          {listStudents.map((item, index) => {
            return (
              <tr key={`list${index}`}>
                <td>{index + 1}</td>
                <td className="text-capitalize">{item.name}</td>
                <td className="text-capitalize">{item.branch}</td>
                <td className="text-uppercase">{item.select}</td>
                <td className="text-capitalize">{item.address}</td>
                <td className="text-lowercase">{item.email}</td>
                <td>{item.numberPhone}</td>
                <td className="d-flex align-items-center justify-content-center ">
                  <div
                    className="btn-toolbar"
                    role="toolbar"
                    aria-label="Tool options"
                  >
                    <div
                      className="btn-group btn-group-sm me-2"
                      role="group"
                      aria-label="first button"
                    >
                      <button type="button" className="btn btn-warning">
                        Sửa
                      </button>
                    </div>
                    <div
                      className="btn-group btn-group-sm"
                      role="group"
                      aria-label="Second button"
                    >
                      <button
                        type="button"
                        className="btn btn-danger"
                        data-index={item.id}
                        onClick={handleDeleteStudents}
                      >
                        Xóa
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <ModalAddStudents
        show={isShowModalAddStudents}
        handleClose={handleClose}
        handleUpdateStudents={handleUpdateStudents}
      />
      <ToastContainer />
    </div>
  );
};
export default DataAcc;

import React from "react";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { FetchAllStudents } from "../../Services/StudentServices";

import { ModalEdit } from "../../Component/Learn/ModalEditStudentLearn/ModalEdit";
const ManagerLearn = () => {
  const [listStudentsLearn, setStudentsLearn] = useState([]);
  const [id, setId] = useState(0);
  const [isShow, setIsShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const get = async () => {
    const respon = await FetchAllStudents();
    if (respon && respon.data) {
      setStudentsLearn(respon.data);
    }
  };
  useEffect(() => {
    get();
  }, []);
  const handleShow = (e) => {
    setId(e.target.dataset.index);
    setIsShow(true);
    setIsEdit(true);
  };
  const handleClose = () => {
    setIsShow(false);
    setIsEdit(false);
  };
  const handlePrintf = () => {
    window.print();
  };
  const handleUpdateStudents = () => {
    get();
  };
  return (
    <div className="w-100">
      <div className="w-100 h-10 d-flex my-3 justify-content-between">
        <h3>Quản lý Điểm</h3>
        <div>
          <button
            className="btn btn-info text-white"
            onClick={handlePrintf}
            size="sm"
          >
            In DS
          </button>
          {/* <button
            className="btn btn-success"
            onClick={handleShow}
            size="sm"
          ></button> */}
        </div>
      </div>
      <></>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Stt</th>
            <th>Họ và tên</th>
            <th>Mã SV</th>
            <th>Nhập môn LT</th>
            <th>Lập trình</th>
            <th>Cơ sở dữ liệu</th>
            <th>Hệ QTCSDL</th>
            <th>Thuật toán</th>
            <th>Tùy chọn</th>
          </tr>
        </thead>
        <tbody>
          {listStudentsLearn.map((item, index) => {
            return (
              <tr key={`depart-${index}`}>
                <td>{index + 1}</td>
                <td className="text-capitalize">{item.name}</td>
                <td>{item.codeStudents}</td>
                <td className="text-capitalize">{item.pointLT}</td>
                <td className="text-capitalize">{item.pointCode}</td>
                <td className="text-capitalize">{item.pointCSDL}</td>
                <td className="text-capitalize">{item.pointQTCSDL}</td>
                <td className="text-capitalize">{item.pointTT}</td>

                <td className="d-flex align-items-center justify-content-center ">
                  <div
                    className="btn-toolbar"
                    role="toolbar"
                    aria-label="Tool options"
                  >
                    <button
                      onClick={handleShow}
                      data-index={item.id}
                      className="button px-2 border border-secondary border-radius rounded bg-secondary"
                    >
                      Sửa
                    </button>

                    <div
                      className="btn-group btn-group-sm"
                      role="group"
                      aria-label="Second button"
                    >
                      <button
                        type="button"
                        className="btn btn-danger"
                        data-index={item.id}
                      >
                        Thêm
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <ToastContainer />
      <ModalEdit
        show={isShow}
        handleClose={handleClose}
        isEdit={isEdit}
        Id={id}
        handleUpdateStudents={handleUpdateStudents}
      />
    </div>
  );
};

export default ManagerLearn;

import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { ToastContainer, toast } from "react-toastify";

import {
  FetchAllStudents,
  deleteStudents,
} from "../../Services/StudentServices";
import ModalAddStudents from "../ModalAddStudents/ModalAddStudents.js";
import ModalEditStudents from "../ModalEditStudents/ModalEditStudents";
const DataAcc = ({ props }) => {
  const [listStudents, setListStudents] = useState([]);
  const [isShowModalAddStudents, setShowModalAddStudents] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [idEdit, setIdEdit] = useState(0);
  const [search, setSearch] = useState("");
  var [haveSearch, setHaveSearch] = useState(false);
  useEffect(() => {
    getStudent();
  }, [search]);
  // get data
  const getStudent = async () => {
    let res = await FetchAllStudents();
    if (res && res.data) {
      setListStudents(res.data);
    }
  };
  //show modal add
  const handleShow = () => {
    setShowModalAddStudents(true);
  };
  const handleClose = () => {
    setShowModalAddStudents(false);
    setEdit(false);
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
    let iM = toast.loading("Đang xóa!");
    setTimeout(() => {
      toast.dismiss(iM);
      getStudent();
      toast.warning("Xóa thành công");
    }, 1000);
  };
  //edit students
  const handleEditStudents = (e) => {
    setEdit(true);
    setIdEdit(e.target.dataset.index);
  };

  const handleChangeSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
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
      <>
        {/* search students */}
        <form className="w-25  py-1 px-1  ">
          <div className="form-group ">
            <input
              value={search}
              type="text"
              className="form-control"
              autoComplete="search"
              placeholder="Tìm kiếm sinh viên"
              onChange={handleChangeSearch}
            />
          </div>
        </form>
      </>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Stt</th>
            <th>Họ và Tên</th>
            <th>Mã SV</th>
            <th>Ngành</th>
            <th>Khóa</th>
            <th>Địa chỉ</th>
            <th>Email</th>
            <th>SDT</th>
            <th>Tùy chọn</th>
          </tr>
        </thead>
        <tbody>
          {listStudents
            .filter((item) => {
              return search.toLowerCase() === " "
                ? item
                : item.name.toLowerCase().includes(search);
            })
            .map((item, index) => {
              return (
                <tr key={`data${index}`}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.codeStudents}</td>
                  <td>{item.branch}</td>
                  <td>{item.select}</td>
                  <td>{item.address}</td>
                  <td>{item.email}</td>
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
                        <button
                          type="button"
                          className="btn btn-warning"
                          data-index={item.id}
                          onClick={handleEditStudents}
                        >
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
      <ModalEditStudents
        show={isEdit}
        isEdit={isEdit}
        idEdit={idEdit}
        handleClose={handleClose}
        handleUpdateStudents={handleUpdateStudents}
      />
      <ToastContainer />
    </div>
  );
};
export default DataAcc;

import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { ToastContainer, toast } from "react-toastify";

import {
  FetchAllStudents,
  deleteStudents,
} from "../../Services/StudentServices";
import ModalAddStudents from "../../Component/ModalAddStudents/ModalAddStudents.js";
import ModalEditStudents from "../../Component/ModalEditStudents/ModalEditStudents";
import ModalReviewStudents from "../../Component/ModalReviewStdudents/ModalReviewStudents";

import { AiOutlineEye } from "react-icons/ai";
const ManagerStudents = ({ props }) => {
  const [listStudents, setListStudents] = useState([]);
  const [isShowModalAddStudents, setShowModalAddStudents] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [isReview, setIsReview] = useState(false);

  const [idEdit, setIdEdit] = useState(0);
  const [idReview, setIdReview] = useState(0);

  const [search, setSearch] = useState("");
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
    setIsReview(false);
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
    }, 500);
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
  const handleReviewStudents = (e) => {
    setIsReview(true);
    setIdReview(e.target.dataset.index);
  };
  return (
    <div className="w-100">
      <div className="w-100 h-10 d-flex my-3 justify-content-between">
        <h3>Quản lý sinh viên</h3>
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
            <th>Khoa</th>
            <th>Khóa</th>
            <th>Tùy chọn</th>
          </tr>
        </thead>
        <tbody>
          {listStudents
            .filter((item) => {
              return search.toLowerCase() === " "
                ? item
                : item.name.toLowerCase().includes(search.toLowerCase());
            })
            .map((item, index) => {
              return (
                <tr key={`data${index}`}>
                  <td>{index + 1}</td>
                  <td className="text-capitalize">{item.name}</td>
                  <td>{item.codeStudents}</td>
                  <td className="text-capitalize">{item.department}</td>
                  <td className="text-capitalize">{item.address}</td>
                  <td className="d-flex align-items-center justify-content-center ">
                    <div
                      className="btn-toolbar"
                      role="toolbar"
                      aria-label="Tool options"
                    >
                      <button
                        onClick={handleReviewStudents}
                        data-index={item.id}
                        className="button px-2 border border-secondary border-radius rounded bg-secondary"
                      >
                        Xem
                      </button>

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
      <ModalReviewStudents
        show={isReview}
        handleClose={handleClose}
        idReview={idReview}
      />
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
export default ManagerStudents;

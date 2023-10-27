import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import { FetchAllStudents } from "../../Services/StudentServices";
import { ToastContainer } from "react-toastify";
import ModalEditStudentsTution from "../../Component/ModalEditStudentTution/ModalEditStudentTution";
const ManagerTution = () => {
  const [listStudents, setListStudents] = useState([]);
  const [isShowModalEditStudents, setShowModalEditStudents] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [idEdit, setIdEdit] = useState(0);
  useEffect(() => {
    getStudent();
  }, []);
  const getStudent = async () => {
    let res = await FetchAllStudents();
    if (res && res.data) {
      setListStudents(res.data);
    }
  };
  const handlePrintf = () => {
    window.print();
  };
  const handleShow = (e) => {
    setShowModalEditStudents(true);
    setEdit(true);
    setIdEdit(e.target.dataset.index);
  };
  const handleUpdateStudents = () => {
    getStudent();
  };
  const handleClose = () => {
    setShowModalEditStudents(false);
    setEdit(false);
  };

  return (
    <>
      <div className="w-100">
        <div className="w-100 h-10 d-flex my-3 justify-content-between">
          <h3>Thông tin học phí sinh viên</h3>
          <div>
            <button
              className="btn btn-info text-white"
              onClick={handlePrintf}
              size="sm"
            >
              In DS
            </button>
            <button className="btn btn-success mx-2" size="sm">
              Import Excel
            </button>
            <button className="btn btn-danger" onClick={handleShow} size="sm">
              Lọc
            </button>
          </div>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Stt</th>
              <th>Họ và Tên</th>
              <th>Mã SV</th>
              <th>Ngành</th>
              <th>Học phí(VND)</th>
              <th>Phụ phí(VND)</th>
              <th>Ngày thu</th>
              <th>Tùy chọn</th>
            </tr>
          </thead>
          <tbody>
            {listStudents.map((item, index) => {
              return (
                <tr key={`list${index}`}>
                  <td>{index + 1}</td>
                  <td className="text-capitalize">{item.name}</td>
                  <td className="text-capitalize">{item.codeStudents}</td>
                  <td className="text-capitalize">{item.branch}</td>
                  <td className="text-uppercase">
                    {(item.select === "K11" && "6.000.000") ||
                      (item.select === "K12" && "8.000.000") ||
                      (item.select === "K13" && "12.000.000") ||
                      (item.select === "K14" && "15.000.000")}
                  </td>
                  <td className="text-capitalize">{item.subTution}</td>
                  <td className="text-lowercase">{item.dateTution}</td>
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
                          onClick={handleShow}
                        >
                          Sửa
                        </button>
                      </div>
                      <div
                        className="btn-group btn-group-sm"
                        role="group"
                        aria-label="Second button"
                      ></div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <ToastContainer />
      </div>
      <ModalEditStudentsTution
        show={isShowModalEditStudents}
        isEdit={isEdit}
        idEdit={idEdit}
        handleClose={handleClose}
        handleUpdateStudents={handleUpdateStudents}
      />
    </>
  );
};
export default ManagerTution;

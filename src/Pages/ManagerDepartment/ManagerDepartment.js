import React from "react";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { ToastContainer, toast } from "react-toastify";
import { getDepartment, deleteDepartment } from "../../Services/Department";
const ManagerDepartment = () => {
  const [listDepart, setListDepart] = useState([]);
  const [idDelete, setIdDelete] = useState(0);
  const handleShow = () => {};
  const handlePrintf = () => {};
  useEffect(() => {
    get();
  }, []);
  const get = async () => {
    const respon = await getDepartment();
    if (respon && respon.data) {
      setListDepart(respon.data);
    }
  };
  const handleDeleteDepart = (e) => {
    let id = e.target.dataset.index;
    deleteDepartment(id);
  };
  return (
    <div className="w-100">
      <div className="w-100 h-10 d-flex my-3 justify-content-between">
        <h3>Quản lý Khoa</h3>
        <div>
          <button
            className="btn btn-info text-white"
            onClick={handlePrintf}
            size="sm"
          >
            In DS
          </button>
          <button className="btn btn-success" onClick={handleShow} size="sm">
            Thêm Khoa
          </button>
        </div>
      </div>
      <></>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Stt</th>
            <th>Tên Khoa</th>
            <th>Mã Khoa</th>
            <th>Trưởng Khoa</th>
            <th>Số Sinh viên</th>
            <th>Tùy chọn</th>
          </tr>
        </thead>
        <tbody>
          {listDepart.map((item, index) => {
            return (
              <tr key={`depart-${index}`}>
                <td>{item.id}</td>
                <td className="text-capitalize">{item.nameDepart}</td>
                <td>{item.codeDepart}</td>
                <td className="text-capitalize">{}</td>
                <td className="text-capitalize">{item.coutStudents}</td>
                <td className="d-flex align-items-center justify-content-center ">
                  <div
                    className="btn-toolbar"
                    role="toolbar"
                    aria-label="Tool options"
                  >
                    <button className="button px-2 border border-secondary border-radius rounded bg-secondary">
                      Quản lý
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
                        onClick={handleDeleteDepart}
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
      <ToastContainer />
    </div>
  );
};

export default ManagerDepartment;

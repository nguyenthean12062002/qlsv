import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import { UserContext } from "../../Context/UseContext";
export const ManagerTeacher = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <div className="w-100">
        <div className="w-100 h-10 d-flex my-3 justify-content-between">
          <h3>Thông tin môn học các ngành</h3>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Stt</th>
              <th>Ngành Học</th>
              <th>Mã Ngành</th>
              <th>Các môn trong ngành</th>
              <th>Tùy chọn</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td className="text-capitalize">Công Nghệ Thông Tin</td>
              <td className="text-capitalize">001</td>
              <td className="text-capitalize text-align-start ">
                <tr className="tr__small">
                  <td>Khoa học máy tính</td>
                </tr>
                <tr className="tr__small">
                  <td>Kỹ thuật máy tính</td>
                </tr>
                <tr className="tr__small">
                  <td>Hệ thống thông tin</td>
                </tr>
                <tr className="tr__small">
                  <td>Công nghệ phần mềm</td>
                </tr>
                <tr className="tr__small">
                  <td>An ninh thông tin mạng</td>
                </tr>
                <tr className="tr__small">
                  <td>Phát triển ứng dụng web</td>
                </tr>
              </td>
              {
                (user.name = "admin" ? (
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
                      ></div>
                    </div>
                  </td>
                ) : (
                  <></>
                ))
              }
            </tr>
            <tr>
              <td>2</td>
              <td className="text-capitalize">Quản trị kinh doanh</td>
              <td className="text-capitalize">002</td>
              <td className="text-capitalize text-align-start ">
                <tr className="tr__small">
                  <td>kinh tế quản trị kinh doanh.</td>
                </tr>
                <tr className="tr__small">
                  <td>quản trị doanh nghiệp.</td>
                </tr>
                <tr className="tr__small">
                  <td>quản lý chiến lược kinh doanh</td>
                </tr>
                <tr className="tr__small">
                  <td>quản trị marketing</td>
                </tr>
                <tr className="tr__small">
                  <td>quản trị nguồn nhân lực</td>
                </tr>
                <tr className="tr__small">
                  <td>quản trị chuỗi cung ứng logistic</td>
                </tr>
                <tr className="tr__small">
                  <td>quản trị dự án.</td>
                </tr>
                <tr className="tr__small">
                  <td>quản trị truyền thông.</td>
                </tr>
              </td>
              {
                (user.name = "admin" ? (
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
                      ></div>
                    </div>
                  </td>
                ) : (
                  <></>
                ))
              }
            </tr>
            <tr>
              <td>3</td>
              <td className="text-capitalize">Luật</td>
              <td className="text-capitalize">003</td>
              <td className="text-capitalize text-align-start ">
                <tr className="tr__small">
                  <td>Các môn đại cương liên quan</td>
                </tr>
                <tr className="tr__small">
                  <td>Lý luận nhà nước và pháp luật</td>
                </tr>
                <tr className="tr__small">
                  <td>Lịch sử nhà nước và pháp luật</td>
                </tr>
                <tr className="tr__small">
                  <td>Xây dựng văn bản pháp luật</td>
                </tr>
                <tr className="tr__small">
                  <td>Luật thương mại </td>
                </tr>
                <tr className="tr__small">
                  <td>...v.v.v</td>
                </tr>
              </td>
              {
                (user.name = "admin" ? (
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
                      ></div>
                    </div>
                  </td>
                ) : (
                  <></>
                ))
              }
            </tr>
            <tr>
              <td>4</td>
              <td className="text-capitalize">Ngôn ngữ</td>
              <td className="text-capitalize">001</td>
              <td className="text-capitalize text-align-start ">
                <tr className="tr__small">
                  <td>Các môn đại cương cơ bản</td>
                </tr>
                <tr className="tr__small">
                  <td>Tiếng Anh cơ bản</td>
                </tr>
                <tr className="tr__small">
                  <td>Ngôn ngữ chuyên ngành</td>
                </tr>
                <tr className="tr__small">
                  <td>Tin học văn phòng</td>
                </tr>
              </td>
              {
                (user.name = "admin" ? (
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
                      ></div>
                    </div>
                  </td>
                ) : (
                  <></>
                ))
              }
            </tr>
            <tr>
              <td>5</td>
              <td className="text-capitalize">
                Logistics và chuỗi quản lí cung ứng
              </td>
              <td className="text-capitalize">005</td>
              <td className="text-capitalize text-align-start ">
                <tr className="tr__small">
                  <td>Quản trị học nhập môn.</td>
                </tr>
                <tr className="tr__small">
                  <td>Kỹ thuật máy tính</td>
                </tr>
                <tr className="tr__small">
                  <td>Hệ thống thông tin kinh doanh</td>
                </tr>
                <tr className="tr__small">
                  <td>Giá cả thị trường</td>
                </tr>
                <tr className="tr__small">
                  <td>Luật kinh doanh</td>
                </tr>
                <tr className="tr__small">
                  <td>Quản trị Vận tải và Chuỗi cung ứng nhập môn</td>
                </tr>
                <tr className="tr__small">
                  <td>Kênh phân phối và lưu trữ</td>
                </tr>
                <tr className="tr__small">
                  <td>Kinh tế & Tài chính.</td>
                </tr>
              </td>
              {
                (user.name = "admin" ? (
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
                      ></div>
                    </div>
                  </td>
                ) : (
                  <></>
                ))
              }
            </tr>
            <tr>
              <td>6</td>
              <td className="text-capitalize">Công Nghệ Phần Mềm</td>
              <td className="text-capitalize">006</td>
              <td className="text-capitalize text-align-start ">
                <tr className="tr__small">
                  <td>Kiến thức cơ bản về máy tính</td>
                </tr>
                <tr className="tr__small">
                  <td>Kỹ năng thiết kế , xây dựng</td>
                </tr>
                <tr className="tr__small">
                  <td>Hệ thống thu thập xử lí yêu cầu</td>
                </tr>
                <tr className="tr__small">
                  <td>Công nghệ phần mềm</td>
                </tr>
                <tr className="tr__small">
                  <td>An ninh thông tin mạng</td>
                </tr>
                <tr className="tr__small">
                  <td>Phát triển ứng dụng</td>
                </tr>
              </td>
              {
                (user.name = "admin" ? (
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
                      ></div>
                    </div>
                  </td>
                ) : (
                  <></>
                ))
              }
            </tr>
            <tr>
              <td>7</td>
              <td className="text-capitalize">Công Nghệ Kỹ Thuật Oto</td>
              <td className="text-capitalize">007</td>
              <td className="text-capitalize text-align-start ">
                <tr className="tr__small">
                  <td>Các môn đại cương cơ bản</td>
                </tr>
                <tr className="tr__small">
                  <td>Lý thuyết động cơ dốt trong</td>
                </tr>
                <tr className="tr__small">
                  <td>Lý thuyết ô tô</td>
                </tr>
                <tr className="tr__small">
                  <td>Kết cấu ô tô</td>
                </tr>
                <tr className="tr__small">
                  <td>Quản lí vận tải</td>
                </tr>
                <tr className="tr__small">
                  <td>Kết cấu ô tô</td>
                </tr>
              </td>
              {
                (user.name = "admin" ? (
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
                      ></div>
                    </div>
                  </td>
                ) : (
                  <></>
                ))
              }
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

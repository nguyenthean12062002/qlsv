import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Context/UseContext";
const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <section className="main">
      <main className="main__wrapper w-100">
        <Container className="pt-3">
          <Row className="justify-content-center">
            <Col md={8}>
              <h1>Quản lí Sinh viên</h1>
              <p>
                Web Quản lí Sinh viên là một ứng dụng được thiết kế để giúp quản
                lí thông tin và hoạt động liên quan đến sinh viên trong các
                trường đại học, cao đẳng và trung học phổ thông. Nó cung cấp các
                tính năng như quản lí thông tin cá nhân, học phí, điểm số, lịch
                học, và nhiều hơn nữa.
              </p>
              <p>
                Với Web Quản lí Sinh viên, người dùng có thể dễ dàng quản lí và
                theo dõi thông tin của từng sinh viên, bao gồm thông tin cá
                nhân, học phí, danh sách môn học, kết quả học tập, và thời khóa
                biểu. Nó cung cấp một giao diện người dùng thân thiện và dễ sử
                dụng, cho phép người dùng thực hiện các tác vụ quản lí một cách
                hiệu quả.
              </p>
              <h3>Tính năng chính:</h3>
              <ul>
                <li>Quản lí thông tin cá nhân của sinh viên</li>
                <li>Quản lí học phí và thanh toán</li>
                <li>Quản lí danh sách môn học và đăng ký môn học</li>
                <li>Theo dõi kết quả học tập và điểm số</li>
                <li>Xem lịch học và thời khóa biểu</li>
                <li>Tích hợp gửi thông báo và tin nhắn cho sinh viên</li>
              </ul>
              <Card className="mt-4">
                <Card.Body>
                  <Card.Title>Bắt đầu sử dụngWeb Quản lí Sinh viên</Card.Title>
                  <Card.Text>
                    Để bắt đầu sử dụng Web Quản lí Sinh viên, hãy đăng nhập vào
                    hệ thống với tài khoản của bạn hoặc đăng ký tài khoản mới
                    nếu bạn chưa có. Sau đó, bạn sẽ có quyền truy cập và sử dụng
                    các tính năng của Web.
                  </Card.Text>
                  {user && user.name ? (
                    <Button variant="primary">
                      <Link
                        to="/manager/students"
                        className="text-white text-decoration-none"
                      >
                        Đi đến quản lí sinh viên
                      </Link>
                    </Button>
                  ) : (
                    <>
                      <Button variant="primary">
                        <Link
                          to="/account/login"
                          className="text-white text-decoration-none"
                        >
                          Đăng nhập
                        </Link>
                      </Button>
                      <Button variant="outline-primary" className="ml-2">
                        <Link
                          className="text-decoration-none"
                          to="/account/register"
                        >
                          Đăng ký
                        </Link>
                      </Button>
                    </>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    </section>
  );
};
export default Home;

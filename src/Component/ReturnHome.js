import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
const ReturnHome = (props) => {
  const { show } = props;
  console.log(1);
  console.log(show);
  return (
    <Modal show={show} onHide={false}>
      <Modal.Header closeButton>
        <Modal.Title>Quay về trang chủ</Modal.Title>
      </Modal.Header>
      <Modal.Body></Modal.Body>
      <Modal.Footer>
        <Button variant="secondary">Hủy bỏ</Button>
        <Button variant="primary">Đi tới</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ReturnHome;

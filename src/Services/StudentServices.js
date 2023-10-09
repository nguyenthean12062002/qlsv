import axios from "axios";
const API = "http://localhost:3000/students";
const FetchAllStudents = () => {
  return axios.get(API);
};

const deleteStudents = (index) => {
  return axios.delete(`${API}/${index}`);
};
export { FetchAllStudents, deleteStudents };

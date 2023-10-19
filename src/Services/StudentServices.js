import axios from "axios";
const API = "https://4rhqkq-8080.csb.app/students";
// call API
const FetchAllStudents = () => {
  return axios.get(API);
};
// post add Students
const postStudents = (data) => {
  return axios.post(API, data);
};
// deleteStudents
const deleteStudents = (index) => {
  return axios.delete(`${API}/${index}`);
};
// updateEdit Students
const editStudents = (index, data) => {
  return axios.put(`${API}/${index}`, data);
};

export { FetchAllStudents, postStudents, deleteStudents, editStudents };
// return axios.put(`${API}/${index}`, data);

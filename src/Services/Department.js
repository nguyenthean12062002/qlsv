import axios from "axios";
const API_DEPARTMENT = "https://4rhqkq-8080.csb.app/department";
const getDepartment = () => {
  return axios.get(API_DEPARTMENT);
};
const deleteDepartment = (index) => {
  return axios.delete(`${API_DEPARTMENT}/${index}`);
};
export { getDepartment, deleteDepartment };

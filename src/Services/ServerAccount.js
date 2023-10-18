import axios from "axios";
const API = "http://localhost:3000/checklogin";
const getAccount = () => {
  return axios.get(API);
};
const putIsCheckLogin = (id, isLogin) => {
  return axios.put(`${API}/${id}`, isLogin);
};
export { getAccount, putIsCheckLogin };

import axios from "axios";
const API = "https://4rhqkq-8080.csb.app/checklogin";
const getAccount = () => {
  return axios.get(API);
};
const putIsCheckLogin = (id, isLogin) => {
  return axios.put(`${API}/${id}`, isLogin);
};
export { getAccount, putIsCheckLogin };

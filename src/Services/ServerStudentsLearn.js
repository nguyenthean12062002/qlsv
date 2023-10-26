import axios from "axios";
const API_LEARN = "";
const getList = () => {
  return axios.get(API_LEARN);
};
export { getList };

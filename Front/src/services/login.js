import axios from "axios";
import helper from "../helper/helper";
const baseUrl = "/api/login";
const adminUrl = "/api/login/admin/";

// POST req to login
const login = async (credentials) => {
  const res = await axios.post(baseUrl, credentials);
  return res.data;
};

// POST req to admin login
const adminLogin = async (credentials) => {
  const config = helper.loggedUserConfig(); // Passing user token
  const res = await axios.post(adminUrl, credentials, config);
  return res.data;
};

export default { login, adminLogin };

import axios from "axios";
import helper from "../helper/helper";
const baseUrl = "/api/user";

// New User Register
const newUser = async (user) => {
  const logged = helper.checkLogged();
  if (logged) {
    console.log("WOOPsss, it got caught: ", user);
    throw new Error("Already Signed In");
  }
  const response = await axios.post(baseUrl, user);
  return response.data;
};

// Fetching a User
const getUser = async () => {
  const config = helper.loggedUserConfig();
  const response = await axios.get(baseUrl, config);
  return response.data;
};

// Deleting a User
const deleteUser = async () => {
  const logged = helper.checkLogged();
  if (logged.role !== "admin") {
    console.log("WOOPsss, it got caught", logged.role);
    throw new Error("UnAuthorized Action");
  }
  const config = helper.loggedUserConfig();
  const response = await axios.delete(baseUrl, config);
  console.log("User Deleted", response.data);
  return response.data;
};

export default { newUser, getUser, deleteUser };

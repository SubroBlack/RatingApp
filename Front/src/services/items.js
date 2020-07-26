import axios from "axios";
import helper from "../helper/helper";
const baseUrl = "/api/items";

// Fetching all the Items
const getAll = async () => {
  const config = helper.loggedUserConfig();
  const response = await axios.get(baseUrl, config);
  return response.data;
};

// Fetching a single item
const getItem = async (id) => {
  const config = helper.loggedUserConfig();
  const response = await axios.get(`${baseUrl}/${id}`, config);
  return response.data;
};

// Adding an Item
const addItem = async (item) => {
  const user = helper.checkLogged();
  console.log("New Item to be sent: ", item);
  if (user.role !== "admin") {
    console.log("WOOPsss, it got caught: ", user.role);
    throw new Error("Only Admin can Add Items");
  }
  const config = helper.loggedUserConfig();
  const response = await axios.post(baseUrl, item, config);
  console.log("New Item Added: ", response.data);
  return response.data;
};

// Editing an Item
const editItem = async (id, item) => {
  const user = helper.checkLogged();
  if (user.role !== "admin") {
    console.log("WOOPsss, it got caught: ", user.role);
    throw new Error("Only Admin can Add Items");
  }
  const config = helper.loggedUserConfig();
  const response = await axios.put(`${baseUrl}/${id}`, item, config);
  return response.data;
};

// Rate an Item
const rateItem = async (id, rating) => {
  const user = helper.checkLogged();
  if (user.role !== "user") {
    console.log("WOOPsss, it got caught: ", user.role);
    throw new Error("Only User can Rate Items");
  }
  const config = helper.loggedUserConfig();
  const response = await axios.put(`${baseUrl}/rate/${id}`, rating, config);
  return response.data;
};

// Deleting an item
const removeItem = async (id) => {
  const user = helper.checkLogged();
  if (user.role !== "admin") {
    console.log("WOOPsss, it got caught: ", user.role);
    throw new Error("Only Admin can Delete Items");
  }
  const config = helper.loggedUserConfig();
  const res = await axios.delete(`${baseUrl}/${id}`, config);
  return res;
};

export default { getAll, getItem, addItem, editItem, rateItem, removeItem };

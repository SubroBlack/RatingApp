import axios from "axios";
import helper from "../helper/helper";
const baseUrl = "/api/items";

// Fetching all the Items
const getAll = async () => {
  const config = helper.loggedUserConfig();
  const response = await axios.get(baseUrl, config);
  console.log("Items Service getAll: ", response.data);
  return response.data;
};

// Fetching a single item
const getItem = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

export default { getAll, getItem };

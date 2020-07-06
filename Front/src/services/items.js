import axios from "axios";
const baseUrl = "http://localhost:3001/api/items";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const getItem = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

export default { getAll, getItem };

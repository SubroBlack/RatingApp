import itemService from "../services/items";

// Initializing Items
export const initializeItems = () => {
  return async (dispatch) => {
    const items = await itemService.getAll();
    dispatch({
      type: "INIT_ITEMS",
      data: items,
    });
  };
};

// Fetching a single Item
export const getItem = (id) => {
  return async (dispatch) => {
    const item = await itemService.getItem(id);
    dispatch({
      type: "GET_ITEM",
      data: item,
    });
  };
};

// Items Reducer
const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_ITEMS":
      return action.data;
    case "GET_ITEM":
      return action.data;
    default:
      return state;
  }
};

export default itemsReducer;

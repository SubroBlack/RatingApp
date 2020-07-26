import itemService from "../services/items";

// Initializing Items
export const allItems = () => {
  return async (dispatch) => {
    const items = await itemService.getAll();
    dispatch({
      type: "ITEMS",
      data: items,
    });
  };
};

// Fetching a single Item
export const getItem = (id) => {
  return async (dispatch) => {
    const item = await itemService.getItem(id);
    console.log("Single Item fetched: ", item);
    dispatch({
      type: "GET_ITEM",
      data: item,
    });
  };
};

// Adding an Item
export const addItem = (item) => {
  return async (dispatch) => {
    const newItem = await itemService.addItem(item);
    dispatch({
      type: "NEW",
      data: newItem,
    });
  };
};

// Editing an Item
export const editItem = (id, item) => {
  return async (dispatch) => {
    const editedItem = await itemService.editItem(id, item);
    dispatch({
      type: "EDITED",
      data: editedItem,
    });
  };
};

// Rating an Item
export const rateItem = (id, rating) => {
  return async (dispatch) => {
    const ratedItem = await itemService.rateItem(id, rating);
    dispatch({
      type: "EDITED",
      data: ratedItem,
    });
  };
};

// Deleting the item
export const deleteItem = (item) => {
  return async (dispatch) => {
    await itemService.removeItem(item.id);
    dispatch({
      type: "DELETE",
      data: item,
    });
  };
};

// Items Reducer
const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case "ITEMS":
      return action.data;
    case "GET_ITEM":
      return action.data;
    case "NEW":
      return state.concat(action.data);
    case "EDITED":
      const other = state.filter((item) => item.id !== action.data.id);
      return other.concat(action.data);
    case "DELETE":
      return state.filter((obj) => obj.id !== action.data.id);
    default:
      return state;
  }
};

export default itemsReducer;

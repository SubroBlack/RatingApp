import itemService from "../services/items";
import { notify } from "./notification";

// Action Types
const ITEMS = "ITEMS";
const NEW = "NEW";
const EDITED = "EDITED";
const DELETE = "DELETE";

// Action Creator
const action = (actionType, data) => {
  return {
    type: actionType,
    data: data,
  };
};

// Initializing Items
export const allItems = () => {
  return async (dispatch) => {
    const items = await itemService.getAll();
    dispatch(action(ITEMS, items));
  };
};

// Fetching a single Item
export const getItem = (id) => {
  return async (dispatch) => {
    const item = await itemService.getItem(id);
    dispatch(action(ITEMS, item));
  };
};

// Adding an Item
export const addItem = (item) => {
  return async (dispatch) => {
    const addedItem = await itemService.addItem(item);
    dispatch(action(NEW, addedItem));
    dispatch(
      notify(
        { data: `${addedItem.name} added to collection`, category: "success" },
        5
      )
    );
  };
};

// Editing an Item
export const editItem = (id, item) => {
  return async (dispatch) => {
    const editedItem = await itemService.editItem(id, item);
    dispatch(action(EDITED, editedItem));
    dispatch(
      notify(
        {
          data: `${editedItem.name} updated in collection`,
          category: "success",
        },
        5
      )
    );
  };
};

// Rating an Item
export const rateItem = (id, rating) => {
  return async (dispatch) => {
    const ratedItem = await itemService.rateItem(id, rating);
    dispatch(action(EDITED, ratedItem));
    dispatch(
      notify({ data: `Thank You for your feedback`, category: "success" }, 3.5)
    );
  };
};

// Deleting the item
export const deleteItem = (item) => {
  return async (dispatch) => {
    await itemService.removeItem(item.id);
    dispatch(action(DELETE, item));
    dispatch(
      notify(
        { data: `${item.name} removed from collection`, category: "success" },
        5
      )
    );
  };
};

// Items Reducer
const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case ITEMS:
      return action.data;
    case NEW:
      return state.concat(action.data);
    case EDITED:
      const other = state.filter((item) => item.id !== action.data.id);
      return other.concat(action.data);
    case DELETE:
      return state.filter((obj) => obj.id !== action.data.id);
    default:
      return state;
  }
};

export default itemsReducer;

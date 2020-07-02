import itemService from "../services/items";

export const initializeItems = () => {
  return async (dispatch) => {
    const items = await itemService.getAll();
    dispatch({
      type: "INIT_ITEMS",
      data: items,
    });
  };
};

const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_ITEMS":
      return action.data;
    default:
      return state;
  }
};

export default itemsReducer;

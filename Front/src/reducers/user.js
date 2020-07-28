import userService from "../services/user";

// Fetching a single Item
export const getUser = () => {
  return async (dispatch) => {
    const user = await userService.getUser();
    dispatch({
      type: "SET_USER",
      data: user,
    });
  };
};

// Adding a User
export const addUser = (user) => {
  return async (dispatch) => {
    const newUser = await userService.newUser(user);
    dispatch({
      type: "SET_USER",
      data: newUser,
    });
  };
};

// Editing an Item
export const editUser = (user) => {
  return async (dispatch) => {
    const editedUser = await userService.editUser(user);
    dispatch({
      type: "SET_USER",
      data: editedUser,
    });
  };
};

// Deleting the item
export const deleteUser = (user) => {
  return async (dispatch) => {
    await userService.deleteUser();
    dispatch({
      type: "DELETE",
      data: user,
    });
  };
};

// Items Reducer
const userReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_USER":
      return action.data;
    case "DELETE":
      return null;
    default:
      return state;
  }
};

export default userReducer;

import userService from "../services/user";
import { notify } from "./notification";

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
    dispatch(
      notify({ data: `Welcome ${newUser.name}`, category: "success" }, 5)
    );
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
    dispatch(
      notify({ data: `${editedUser.name} updated`, category: "success" }, 5)
    );
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
    dispatch(notify({ data: `CIAO ${user.name}`, category: "success" }, 3.5));
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

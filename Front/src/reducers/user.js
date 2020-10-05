import userService from "../services/user";
import { notify } from "./notification";

// Action Type
const SET_USER = "SET_USER";

// Action Creator setting the user
const setUser = (user) => {
  return {
    type: SET_USER,
    user: user,
  };
};

// Fetching a single User
export const getUser = () => {
  return async (dispatch) => {
    const user = await userService.getUser();
    dispatch(setUser(user));
  };
};

// Adding a User
export const addUser = (user) => {
  return async (dispatch) => {
    const newUser = await userService.newUser(user);
    dispatch(setUser(newUser));
    dispatch(
      notify({ data: `Welcome ${newUser.name}`, category: "success" }, 5)
    );
  };
};

// Editing a User
export const editUser = (user) => {
  return async (dispatch) => {
    const editedUser = await userService.editUser(user);
    dispatch(setUser(editUser));
    dispatch(
      notify({ data: `${editedUser.name} updated`, category: "success" }, 5)
    );
  };
};

// Deleting the User
export const deleteUser = (user) => {
  return async (dispatch) => {
    await userService.deleteUser();
    dispatch(setUser(null));
    dispatch(notify({ data: `CIAO ${user.name}`, category: "success" }, 3.5));
  };
};

// User Reducer
const userReducer = (state = [], action) => {
  switch (action.type) {
    case SET_USER:
      return action.user;
    default:
      return state;
  }
};

export default userReducer;

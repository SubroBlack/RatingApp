import loginService from "../services/login";
import helper from "../helper/helper";
import { notify } from "./notification";

// setting a logged user in the store
const setLogged = (user) => {
  return {
    type: "SET_LOGGED",
    user: user,
  };
};

// Setting a user when signing in
export const signIn = (email, password) => {
  return async (dispatch) => {
    try {
      // Get User token from Server
      const loggedUser = await loginService.login({ email, password });
      // Save User in the Browser
      window.localStorage.setItem(
        "loggedRatingAppUser",
        JSON.stringify(loggedUser)
      );
      await dispatch(setLogged(loggedUser));
      await dispatch(notify({ data: `Welcome`, category: "success" }, 5));
    } catch (exception) {
      console.log(exception);
    }
  };
};

// User Logging Out
export const logOut = () => {
  return async (dispatch) => {
    window.localStorage.removeItem("loggedRatingAppAdmin");
    window.localStorage.removeItem("loggedRatingAppUser");
    const user = await helper.checkLogged();
    await dispatch(setLogged(user));
    await dispatch(notify({ data: "See Ya!", category: "success" }, 5));
  };
};

// Checking if the user in loggedIn during reloads
export const setLoggedUser = () => {
  return async (dispatch) => {
    const user = helper.checkLogged();
    await dispatch(setLogged(user));
  };
};

// Setting a user ADMIN when signing in
export const adminSignIn = (adminPin) => {
  return async (dispatch) => {
    try {
      // Get User token from Server
      const loggedAdmin = await loginService.adminLogin({ adminPin });
      // Save User in the Browser
      window.localStorage.setItem(
        "loggedRatingAppAdmin",
        JSON.stringify(loggedAdmin)
      );
      await dispatch(notify({ data: `Admin mode`, category: "success" }, 5));
      await dispatch(setLogged(loggedAdmin));
    } catch (exception) {
      console.log(exception);
    }
  };
};

// Admin Logging Out
export const AdminLogOut = () => {
  return async (dispatch) => {
    window.localStorage.removeItem("loggedRatingAppAdmin");
    const user = await helper.checkLogged();
    await dispatch(notify({ data: `User mode`, category: "success" }, 5));
    await dispatch(setLogged(user));
  };
};

// Login Reducer
const loginReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_LOGGED":
      return action.user;
    case "CLEAR_LOGGED":
      return action.user;
    default:
      return state;
  }
};

export default loginReducer;

import loginService from "../services/login";
import helper from "../helper/helper";

// setting a logged user in the store
const setUser = (user) => {
  return {
    type: "SET_USER",
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
      dispatch(setUser(loggedUser));
    } catch (exception) {
      console.log(exception);
    }
  };
};

// User Logging Out
export const logOut = () => {
  return async (dispatch) => {
    await window.localStorage.removeItem("loggedRatingAppAdmin");
    await window.localStorage.removeItem("loggedRatingAppUser");
    const user = helper.checkLogged();
    await dispatch(setUser(user));
  };
};

// Checking if the user in loggedIn during reloads
export const setLoggedUser = () => {
  return async (dispatch) => {
    const user = helper.checkLogged();
    dispatch(setUser(user));
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
      dispatch(setUser(loggedAdmin));
    } catch (exception) {
      console.log(exception);
    }
  };
};

// Admin Logging Out
export const AdminLogOut = () => {
  return async (dispatch) => {
    await window.localStorage.removeItem("loggedRatingAppAdmin");
    const user = helper.checkLogged();
    dispatch(setUser(user));
  };
};

// Login Reducer
const loginReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_USER":
      return action.user;
    case "CLEAR_USER":
      return action.user;
    default:
      return state;
  }
};

export default loginReducer;

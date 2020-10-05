let count = 0;
let code = "";

// Action Type
const NOTIFY = "NOTIFY";

/*
  Notification = {data: "notification text", category: error/warning/success/info}
*/
// Action Creator to notify of anything
const action = (msg) => {
  return {
    type: NOTIFY,
    msg: msg,
  };
};

// Setting notification with message to be displayed and duration of notification in sec
export const notify = (message, sec) => {
  return async (dispatch) => {
    dispatch(action(message));
    count = count + 1;
    if (count > 1) {
      console.log("Count: ", count);
      clearTimeout(code);
    }
    code = setTimeout(() => {
      count = 0;
      dispatch(action(""));
    }, sec * 1000);
  };
};

const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case NOTIFY:
      return action.msg;
    default:
      return state;
  }
};

export default notificationReducer;

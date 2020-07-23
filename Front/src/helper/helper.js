// Check loggedUser returns Admin if Admin Token is found else return User token else null
const checkLogged = () => {
  const loggedAdminJSON = window.localStorage.getItem("loggedRatingAppAdmin");
  const admin = JSON.parse(loggedAdminJSON);
  if (admin) {
    return admin;
  }
  const loggedUserJSON = window.localStorage.getItem("loggedRatingAppUser");
  const user = JSON.parse(loggedUserJSON);
  if (user) {
    return user;
  }
  return null;
};

// Token of the LoggedIn
const loggedUserToken = () => {
  const user = checkLogged();
  if (user) {
    return `bearer ${user.token}`;
  } else return null;
};

const loggedUserConfig = () => {
  const token = loggedUserToken();
  if (token === null) {
    return null;
  }
  const config = {
    headers: { auth: token },
  };
  return config;
};

export default { checkLogged, loggedUserConfig };

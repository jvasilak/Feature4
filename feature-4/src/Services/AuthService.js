import Parse from "parse";

// used in auth register component
export const createUser = (newUser) => {
  const user = new Parse.User();

  user.set("username", newUser.email);
  user.set("password", newUser.password);
  user.set("firstname", newUser.firstName);
  user.set("lastname", newUser.lastName);
  user.set("email", newUser.email);

  return user
    .signUp()
    .then((newUserSaved) => {
      console.log('User saved')
      return newUserSaved;
    })
    .catch((error) => {
      alert(`Error: ${error.message}`);
    });
};

// used in auth login component
export const loginUser = (currUser) => {
  const user = new Parse.User();
  user.set("password", currUser.password);
  user.set("username", currUser.username);

  return user
    .logIn(user.email, user.password)
    .then((currUserSaved) => {
      return currUserSaved;
    })
    .catch((error) => {
      //alert(`Error: ${error.message}`);
    });
};

export const checkUser = () => {
  return Parse.User.current()?.authenticated;
};

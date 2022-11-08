import Parse from "parse";

export const getAllUsers = () => {
    console.log("Loading Results...");
    const Users = Parse.Object.extend("User");
    const query = new Parse.Query(Users);
    return query.find().then((results) => {
      // returns array of Game objects
      console.log(results)
      return results;
    });
  };
  
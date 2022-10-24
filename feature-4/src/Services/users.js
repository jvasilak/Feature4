import Parse from "parse";

export const getAllUsers = () => {
    console.log("Loading Results...");
    const User = Parse.Object.extend("User");
    const query = new Parse.Query(User);
    return query.find().then((results) => {
      // returns array of Game objects
      console.log(results)
      return results;
    });
  };
  
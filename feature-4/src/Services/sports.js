import Parse from "parse";

export const getAllSports = () => {
    console.log("Loading Results...");
    const Sport = Parse.Object.extend("Sport");
    const query = new Parse.Query(Sport);
    return query.find().then((results) => {
      // returns array of Game objects
      return results;
    });
  };
  
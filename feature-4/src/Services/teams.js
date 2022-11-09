import Parse from "parse";

export const getAllTeams = () => {
    console.log("Loading Results...");
    const Team = Parse.Object.extend("Teams");
    const query = new Parse.Query(Team);
    return query.find().then((results) => {
      // returns array of Game objects
      return results;
    });
  };
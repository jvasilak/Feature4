import Parse from "parse";

export const getAllGames = () => {
    console.log("Loading Results...");
    const Game = Parse.Object.extend("Game");
    const query = new Parse.Query(Game);
    return query.find().then((results) => {
      // returns array of Game objects
      return results;
    });
  };
  
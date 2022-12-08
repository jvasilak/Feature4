import Parse from "parse";

export const getAllGames = () => {
    console.log("Loading Results...");
    const Game = Parse.Object.extend("Games");
    const query = new Parse.Query(Game);
    return query.find().then((results) => {
      // returns array of Game objects
      return results;
    });
  };

export const updateGame = (updateGame) => {
  const Game = Parse.Object.extend("Games");
  const games = new Parse.Query(Game);

  games.get(updateGame.objectId)
  .then((player) => {
    // The object was retrieved successfully and it is ready to update.
    player.set("Team1Score", parseInt(updateGame.team1score));
    player.set("Team2Score", updateGame.team2score);
    player.save();
  }, (error) => {
    // The object was not retrieved successfully.
    alert("Error While Updating Game, Please Try Again")
    console.log(error);
  });
}
  
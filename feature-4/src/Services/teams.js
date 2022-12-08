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

export const addTeam = (newTeam) => {
  const Teams = Parse.Object.extend("Teams");
  const teams = new Teams();

  teams.set("LeagueID", newTeam.leagueId);
  teams.set("SportID", newTeam.sportId);
  teams.set("Name", newTeam.name);

  teams.save()
  .then(() => {
    // Success
    alert('New object created successfully');
  }, (error) => {
    // Save fails
    alert('Failed to create new object, with error code: ' + error.message);
  });
}
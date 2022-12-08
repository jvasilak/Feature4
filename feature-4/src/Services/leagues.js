import Parse from "parse";

export const getLeagues = () => {
    const Leagues = Parse.Object.extend("Leagues");
    const query = new Parse.Query(Leagues);
    return query.find().then((results) => {
      return results;
    });
};

export const addLeague = (newLeague) => {
  const Leagues = Parse.Object.extend("Leagues");
  const leagues = new Leagues();

  leagues.set("DivisionID", newLeague.divisionId);
  leagues.set("SportID", newLeague.sportId);
  leagues.set("NumTeams", newLeague.numTeams);
  leagues.set("Title", newLeague.title);

  leagues.save()
  .then((league) => {
    // Success
    alert('New object created with objectId: ' + league.id);
  }, (error) => {
    // Save fails
    alert('Failed to create new object, with error code: ' + error.message);
  });
}
  
import Parse from "parse";

export const getLeagues = () => {
    const Leagues = Parse.Object.extend("Leagues");
    const query = new Parse.Query(Leagues);
    return query.find().then((results) => {
      return results;
    });
};
  
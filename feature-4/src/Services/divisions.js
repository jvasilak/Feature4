import Parse from "parse";

export const getDivisions = () => {
    const Divisions = Parse.Object.extend("Divisions");
    const query = new Parse.Query(Divisions);
    return query.find().then((results) => {
      return results;
    });
};
  
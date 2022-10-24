import React, {
    useState,
    useEffect
  } from "react";
import { getAllSports } from "../../../Services/sports";
  
// Once sport info component is added, should make each list item a link
// to its respective component
const SportsList = (props) => {
    const [sports, setSports] = useState([]);
    useEffect(() => {
        getAllSports().then((sport) => {
        setSports(sport);
        });
    }, []);
    if (sports.length > 0) {
        return (<div>
        <ul class="sportsList">
            {sports.map((sport) =>  <li>{sport.get("Name")}</li>)}
        </ul>
        </div>);
    } else {
        return (<div class="loader"></div>);
    }
};

export default SportsList;
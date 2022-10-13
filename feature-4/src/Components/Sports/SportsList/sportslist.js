import React, {
    useState,
    useEffect
  } from "react";
import { getAllSports } from "../../../Services/services.js";
  
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
        return (<SportsList>
        <ul class="sportsList">
            {sports.map((sport) =>  <li>{sport.name}</li>)}
        </ul>
        </SportsList>);
    } else {
        return (<div class="loader"></div>);
    }
};

export default SportsList;
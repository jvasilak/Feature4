import React, {
    useState,
    useEffect
  } from "react";
import { getAllSports } from "../../../Services/sports";
import './sportslist.css';
  
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
        <ul className="sportsList">
            {sports.map((sport) =>  <li><img src={require('./../../../Images/Sports/football.png')} alt="sport icon"></img><p>{sport.get("Name")}</p></li>)}
        </ul>
        </div>);
    } else {
        return (<div className="loader"></div>);
    }
};

export default SportsList;
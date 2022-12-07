import React, {
    useState,
    useEffect
  } from "react";
import { getAllSports } from "../../../Services/sports";
import { Link } from "react-router-dom";
import './sportslist.css';
import CircularProgress from "@mui/material/CircularProgress";

const SportsLogoPaths = {
    "Interhall Tackle Football": require("./../../../Images/Sports/football.png"),
    "Interhall Baseball": require("./../../../Images/Sports/baseball.png"),
    "3 Point Competition": require("./../../../Images/Sports/basketball.png"),
    "4-on-4 Sand Volleyball": require("./../../../Images/Sports/volleyball.png"),
    "7-on-7 Indoor Soccer": require("./../../../Images/Sports/soccer.png"),
    "Broomball": require("./../../../Images/Sports/hockey.png"),
    "Cross Country": require("./../../../Images/Sports/running.png"),
    "Basketball": require("./../../../Images/Sports/basketball.png"),
    "Interhall Flag Football": require("./../../../Images/Sports/football.png"),
    "Tennis Doubles": require("./../../../Images/Sports/tennis.png"),
    "Tennis Singles": require("./../../../Images/Sports/tennis.png"), 
    "Golf": require("./../../../Images/Sports/golf.png"),
};
  
// Once sport info component is added, should make each list item a link
// to its respective component
const SportsList = (props) => {
    const [sports, setSports] = useState([]);
    useEffect(() => {
        getAllSports().then((sport) => {
        setSports(sport);
        });
    }, []);
    const getLogoPath = (sport) => {
        return SportsLogoPaths[sport];
    }
    if (sports.length > 0) {
        return (<div>
        <ul className="sportsList">
            {sports.map((sport) => {
                return (
                    <li onClick={() => {console.log("click")}}>
                        <Link to="/sportinfo" state={sport} className="sportsListLink">
                            <img src={getLogoPath(sport.get("Name"))} alt="sport icon"></img>
                            <p className="sportsListLink">{sport.get("Name")}</p>
                        </Link>
                    </li>
                );
            })}
        </ul>
        </div>);
    } else {
        return (<CircularProgress />);
    }
};

export default SportsList;
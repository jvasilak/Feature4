import React, {
    useState,
    useEffect
} from "react";
import { getAllSports } from "../../Services/sports";
import { getAllGames } from "../../Services/games";
import { getAllTeams } from "../../Services/teams";
import { getDate } from "./../../Services/date";
import './schedule.css';
import CircularProgress from "@mui/material/CircularProgress";

function convertTeamID(ID, teams) {
  let teamName = "";
  teams.map((team) => {
    if(ID === team.get("ID")) {
      teamName = team.get("Name");
    }
  })
  return teamName;
}

function convertSportID(ID, sports) {
  let sportName = "";
  sports.map((sport) => {
    if(ID === sport.get("ID")) {
      sportName = sport.get("Name")
    }
  })
  return sportName;
}

const Schedule = () => {
  const [selectedDay, setSelectedDay] = useState(getDate());
  const [dateOffset, setDateOffset] = useState(0);
  const [games, setGames] = useState([]);
  useEffect(() => {
    getAllGames().then((games) => {
      setGames(games);
    });
  }, []);
  const [sports, setSports] = useState([]);
  useEffect(() => {
    getAllSports().then((sport) => {
      setSports(sport);
    });
  }, []);
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    getAllTeams().then((team) => {
      setTeams(team);
    })
  }, []);
  const newGames = (date) => {
    setSelectedDay(date);
  };
  const gameTime = (date) => {
    let hours = date.getUTCHours();
    let half = "PM";
    if (hours < 12) {
      half = "AM";
    }
    hours = hours % 12;
    if (hours === 0) {
      hours = 12;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      return `${hours}:0${minutes} ${half}`;

    } else {
      return `${hours}:${minutes} ${half}`;
    }
  }
  const updateDay = (direction) => {
    const newOffset = dateOffset + direction;
    setDateOffset(newOffset);
    setSelectedDay(getDate(newOffset));
  };
  if (games.length > 0 && sports.length > 0) {
    return (<div>
      <h1 className="pageHeader">Schedule</h1>
      <div className="dateSelectorParent">
        <button className="dateSelector" onClick={() => updateDay(-1)}>{"<"}</button>
        <h3 className="dateSelector">{selectedDay}</h3>
        <button className="dateSelector" onClick={() => updateDay(1)}>{">"}</button>
      </div>
      <ul className="gameSchedule">
        {games
          .filter(function (game) {
            const d = game.get("GameTime");
            const date = `${d.getUTCMonth()+1}/${d.getUTCDate()}/${d.getUTCFullYear()}`;
            return date === selectedDay;
          })
          .map(
            (game) =>
              (<li>
                <b> {convertSportID(game.get("SportID"), sports)}:</b> {gameTime(game.get("GameTime"))} {convertTeamID(game.get("Team1ID"), teams)} vs
                {" "}{convertTeamID(game.get("Team2ID"), teams)}
              </li>)
          )}
      </ul>
    </div>);
  } else {
    return (<div className="progressBar">
      <CircularProgress />
    </div>);
  }
};

export default Schedule;
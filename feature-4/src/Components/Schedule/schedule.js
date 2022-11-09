import React, {
    useState,
    useEffect
} from "react";
import { getAllSports } from "../../Services/sports";
import { getAllGames } from "../../Services/games";
import { getAllTeams } from "../../Services/teams";
import './schedule.css';

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
  // TODO: add the ability to read the current date into the selected day value, set it as default
  const [selectedDay, setSelectedDay] = useState("10/5/2022");
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
    let hours = date.getHours();
    let half = "PM";
    if (hours < 12) {
      half = "AM";
    }
    //hours = hours % 12;
    let minutes = date.getMinutes();
    if (minutes < 10) {
      return `${hours}:0${minutes} ${half}`;

    } else {
      return `${hours}:${minutes} ${half}`;
    }
  }
  if (games.length > 0 && sports.length > 0) {
    return (<div>
      <h1 className="pageHeader">Schedule</h1>
      <select
        className="scheduleSelector"
        onChange={(selectedDate) => {
          newGames(selectedDate.target.value);
        }}
      >
        <option value="10/4/2022">10/4/2022</option>
        <option value="10/5/2022" selected>10/5/2022</option>
        <option value="10/6/2022">10/6/2022</option>
      </select>
      <ul className="gameSchedule">
        {games
          .filter(function (game) {
            const d = game.get("GameTime");
            const date = `${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}`;
            return date === selectedDay;
          })
          .map(
            (game) =>
              (<li>
                <b> {convertSportID(game.get("SportID"), sports)}:</b> {convertTeamID(game.get("Team1ID"), teams)} vs
                {" "}{convertTeamID(game.get("Team2ID"), teams)} {gameTime(game.get("GameTime"))}
              </li>)
          )}
      </ul>
    </div>);
  } else {
    return (<div className="loader"></div>);
  }
};

export default Schedule;

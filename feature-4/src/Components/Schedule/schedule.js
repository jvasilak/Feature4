import React, {
    useState,
    useEffect
} from "react";

import { getAllSports } from "../../Services/sports";
import { getAllGames } from "../../Services/games";
import './schedule.css';
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
  const newGames = (date) => {
    setSelectedDay(date);
  };
  const gameTime = (date) => {
    console.log(date);
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
      <h1 class="pageHeader">Schedule</h1>
      <select
        class="scheduleSelector"
        onChange={(selectedDate) => {
          newGames(selectedDate.target.value);
        }}
      >
        <option value="10/4/2022">10/4/2022</option>
        <option value="10/5/2022" selected>10/5/2022</option>
        <option value="10/6/2022">10/6/2022</option>
      </select>
      <ul class="gameSchedule">
        {games
          .filter(function (game) {
            const d = game.get("Date");
            const date = `${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}`;
            return date === selectedDay;
          })
          .map(
            (game) =>
              (<li>
                <b> {game.get("Sport")}:</b> {game.get("Team1")} vs
                {" "}{game.get("Team2")} {gameTime(game.get("Date"))}
              </li>)
          )}
      </ul>
    </div>);
  } else {
    return (<div class="loader"></div>);
  }
};

export default Schedule;

import React, {
    useState,
    useEffect
} from "react";

import { getDate } from "../../Services/date";
import { getAllSports } from "../../Services/sports";
import { getAllGames } from "../../Services/games";
import './schedule.css';
const Schedule = () => {
  const today = getDate(0);
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
                {" "}{game.get("Team2")} 
              </li>)
          )}
      </ul>
    </div>);
  } else {
    return (<div class="loader"></div>);
  }
};

export default Schedule;

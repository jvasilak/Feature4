import React, {
    useState,
    useEffect
  } from "react";

  import Navigation from "../navigation";
  
  import { getDate } from "../../Services/date";
  import { getAllSports } from "../../Services/sports";
  import { getAllGames } from "../../Services/games";
  
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
    const getSportByID = (id) => {
      return sports[id - 1]["name"];
    };
    const newGames = (date) => {
      setSelectedDay(date);
    };
    if (games.length > 0 && sports.length > 0) {
      return (<><Navigation /><div>
        <h1 class="pageHeader">Schedule</h1>
        <select
          class="scheduleSelector"
          onchange={(selectedDate) => {
            newGames(selectedDate.target.value);
          } }
        >
          <option value="10/4/2022">10/4/2022</option>
          <option value="10/5/2022" selected>10/5/2022</option>
          <option value="10/6/2022">10/6/2022</option>
        </select>
        <ul class="gameSchedule">
          ${games
            .filter(function (game) {
              return game["date"] === selectedDay;
            })
            .map(
              (game) => (<li>
                <b> {getSportByID(game["sportID"])}:</b> {game["team1"]} vs
                {" "}{game["team2"]} {game["time"]}
              </li>)
            )}
        </ul>
      </div></>);
    } else {
      return (<div class="loader"></div>);
    }
  };
  
  export default Schedule;
  
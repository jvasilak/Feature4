import React, {
    useState,
    useEffect
} from "react";
import { getAllSports } from "../../Services/sports";
import { getAllGames } from "../../Services/games";
import { getAllTeams } from "../../Services/teams";
import { getDate } from "./../../Services/date";
import './schedule.css';
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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

function checkTeamScore(score) {
  if(!score) {
    return "-"
  }
  return score;
}

function getSportByID(id, sports) {
  return (sports.map((sport) => {
    if(sport.get("ID") == id) {
      return sport
    }
  }));
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
        <IconButton className="dateSelector" onClick={() => updateDay(-1)}>
          <ArrowBackIcon />
        </IconButton>
        <h3 className="dateSelector">{selectedDay}</h3>
        <IconButton className="dateSelector" onClick={() => updateDay(1)}>
          <ArrowForwardIcon />
        </IconButton>   
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
              (
              <Card><li>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <p>{convertTeamID(game.get("Team1ID"), teams)}</p>
                  <Link to="/sportinfo" state={getSportByID(game.get("SportID"), sports)[0]} className="sportsListLink">
                    <p>{convertSportID(game.get("SportID"), sports)}</p>
                  </Link>
                  <p>{convertTeamID(game.get("Team2ID"), teams)}</p>
                </Stack>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <p>{checkTeamScore(game.get("Team1score"))}</p>
                  <p>{gameTime(game.get("GameTime"))}</p>
                  <p>{checkTeamScore(game.get("Team2score"))}</p>
                </Stack>
              </li>
              </Card>)
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
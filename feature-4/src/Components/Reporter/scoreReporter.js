import React, {useState, useEffect} from 'react';
import { getAllGames } from '../../Services/games';
import './reporter.css';
// TODO: add form that allows an admin user to fill out and submit to 
// report the score of an existing game in the database
const ScoreReporter = () => {
    const [games, setGames] = useState([]);
    useEffect(() => {
    getAllGames().then((games) => {
      setGames(games);
    });
  }, []);
    return (
        <div>
            <h1 className="pageHeader">Report Scores</h1>
            <form>
            </form>
        </div>
    );
}

export default ScoreReporter;
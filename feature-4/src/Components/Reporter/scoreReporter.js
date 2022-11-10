import React, {useState, useEffect} from 'react';
import { getAllGames } from '../../Services/games';
import './reporter.css';

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
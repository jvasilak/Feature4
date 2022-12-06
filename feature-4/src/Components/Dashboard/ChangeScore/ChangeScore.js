import "./ChangeScore.css";
import { useState } from "react";

export default function ChangeScore(props) {

    const [game, setGame] = useState({
        objectId: "",
        team1score: -1,
        team2score: -1
    });

    function onSubmit(event) {
        event.preventDefault();
        setGame({
            ['objectId']: document.getElementById('id').value ,
            ['team1score'] : parseInt(document.getElementById('team1score').value) ,
            ['team2score'] : parseInt(document.getElementById('team2score').value)
        });
    }

    console.log(game);

    return (
        <div className="page-body">
            <h1>Change Score</h1>
            <form className="changeScoreForm" onSubmit={(event) => {onSubmit(event);}}>
                <div className="form-item">
                    <label>Enter ID:</label>
                    <input type="text"
                    name="id"
                    id="id"
                    required />
                </div>

                <div className="form-item">
                    <label>Team 1 Score:</label>
                    <input type="number"
                    name="team1score"
                    id="team1score"
                    min="0"
                    required />
                </div>
                
                <div className="form-item">
                    <label>Team 2 Score:</label>
                    <input type="number"
                    name="team2score"
                    id="team2score"
                    min="0"
                    required />
                </div>
                <br />
                <input className="changeScoreSubmit" type="submit" />
            </form>
        </div>
    )
}
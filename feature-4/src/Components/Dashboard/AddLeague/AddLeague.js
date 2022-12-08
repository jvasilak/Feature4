import "./AddLeague.css";
import { useState } from "react";
import { addLeague } from "../../../Services/leagues";

export default function AddLeague() {

    const [league, setLeague] = useState({
        divisionId: -1,
        sportId: -1,
        numTeams: -1,
        title: ""
    });

    function onSubmit(event) {
        event.preventDefault();
        setLeague({
            ['divisionId']: parseInt(document.getElementById('divisionId').value) ,
            ['sportId'] : parseInt(document.getElementById('sportId').value) ,
            ['numTeams'] : parseInt(document.getElementById('numTeams').value) ,
            ['title'] : document.getElementById('title').value
        });

        addLeague(league);
        console.log('Submitted');
    }

    console.log(league);

    return (
        <div className="page-body">
            <h1>Add A League</h1>
            <form className="addLeagueForm" onSubmit={(event) => {onSubmit(event);}}>
                <div className="form-item">
                    <label>Enter Division ID:</label>
                    <input type="number"
                    name="divisionId"
                    id="divisionId"
                    min="1"
                    max="4"
                    required />
                </div>

                <div className="form-item">
                    <label>Enter Sport ID:</label>
                    <input type="number"
                    name="sportId"
                    id="sportId"
                    min="1"
                    max="12"
                    required />
                </div>
                
                <div className="form-item">
                    <label>Enter Number of Teams:</label>
                    <input type="number"
                    name="numTeams"
                    id="numTeams"
                    min="2"
                    required />
                </div>

                <div className="form-item">
                    <label>League Title:</label>
                    <input type="text"
                    name="title"
                    id="title"
                    required />
                </div>

                <br />
                <input className="addLeagueSubmit" type="submit" />
            </form>
        </div>
    )
}
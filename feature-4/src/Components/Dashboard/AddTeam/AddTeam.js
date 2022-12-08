import "./AddTeam.css";
import { useState } from "react";
import { addTeam } from "../../../Services/teams";

export default function AddTeam() {
    const [team, setTeam] = useState({
        leagueId: -1,
        sportId: -1,
        name: ""
    });

    function onSubmit(event) {
        event.preventDefault();
        setTeam({
            ['leagueId']: parseInt(document.getElementById('leagueId').value) ,
            ['sportId'] : parseInt(document.getElementById('sportId').value) ,
            ['name'] : document.getElementById('name').value
        });

        // addTeam(team);
        console.log('Submitted');
    }

    console.log(team);

    return (
        <div className="page-body">
            <h1>Add A Team</h1>
            <form className="addTeamForm" onSubmit={(event) => {onSubmit(event);}}>
                <div className="form-item">
                    <label>Enter League ID:</label>
                    <input type="number"
                    name="leagueId"
                    id="leagueId"
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
                    <label>Team Name:</label>
                    <input type="text"
                    name="name"
                    id="name"
                    required />
                </div>

                <br />
                <input className="addTeamSubmit" type="submit" />
            </form>
        </div>
    )
}
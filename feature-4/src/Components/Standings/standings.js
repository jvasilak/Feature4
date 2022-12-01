import React, {useEffect, useState} from 'react';
import { getAllTeams } from '../../Services/teams';

// win percent, head to head, goal difference
const sortStandings = () => {

}

const Standings = (props) => {
    const [allTeams, setAllTeams] = useState([]);
    useEffect(() => {
        getAllTeams().then((team) => {
        setAllTeams(team);
        })
    }, []);
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        setTeams(allTeams.filter(function (team) {
            return props.teamIDs.includes(team.get("ID"))
        }));
    }, [allTeams]);
    let [sortedTeams, setSortedTeams] = useState([]);
    useEffect(() => {
        setSortedTeams(
            Object.entries(teams).sort((a,b) => a["WinPct"] > b["WinPct"])
        )
    }, [teams]);
    console.log(teams);
    console.log(sortedTeams);
    return(
        <div>
            <ul>
                <li>Team | GP | W | L | T | PCT</li>
                {teams.map((team) => {
                    return(<li>{team.get("Name")} {team.get("GamesPlayed")} {team.get("Wins")} 
                    {" "}{team.get("Losses")} {team.get("Ties")} {team.get("WinPct")}</li>);
                })}
            </ul>
        </div>
    )
}

export default Standings;
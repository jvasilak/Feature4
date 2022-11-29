import React, {useEffect, useState} from 'react';
import { getAllTeams } from '../../Services/teams';

const Standings = (props) => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        getAllTeams().then((team) => {
        setTeams(team);
        })
    }, []);
    return(
        <div>
            <ul>
                <li>Team | GP | W | L | T | PCT</li>
            </ul>
        </div>
    )
}

export default Standings;
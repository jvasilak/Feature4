import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import { getLeagues } from '../../../Services/leagues';
import Standings from '../../Standings/standings';

export const SportInfo = (props) => {
    const location = useLocation();
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        getLeagues().then((league) => {
            setLeagues(league);
        });
    }, []);
    if (leagues.length > 0) {
        return(<div>
            <h1>{location.state.get("Name")}</h1>
            <ul>
                {leagues.filter(function (league) {
                    return league.get("SportID") == location.state.get("ID");
                }).map((league) => {
                    return (<li>{league.get("Title")} <Standings teamIDs={league.get("TeamIDs")}/></li>);
                })}
            </ul>
        </div>);
    } else {
        return(
            <h1>{location.state.get("ID")}</h1>
        );
    }
}
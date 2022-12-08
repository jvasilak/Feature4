import React, {useEffect, useState} from 'react';
import { getAllTeams } from '../../Services/teams';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import './standings.css';
import CircularProgress from "@mui/material/CircularProgress";


// win percent, head to head, goal difference
const sortStandings = (teams) => {
    const len = Object.keys(teams).length;
    let indexes = []
    let percents = []
    for(let i = 0; i < len; i++) {
        indexes.push(i);
        percents.push(teams[i].get("WinPct"));
    }
    // bubble sort because I'm lazy
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len-i; j++) {
            if (percents[j] < percents[j+1]) { 
                const tempPct = percents[j];
                const tempIndex = indexes[j];
                percents[j] = percents[j+1];
                indexes[j] = indexes[j+1];
                percents[j+1] = tempPct;
                indexes[j+1] = tempIndex;  
            }
        }
    }
    let sortedTeams = [];
    for(let i = 0; i < len; i++) {
        sortedTeams.push(teams[indexes[i]]);
    }
    return sortedTeams;
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
    const [sortedTeams, setSortedTeams] = useState([]);
    useEffect(() => {
        if (teams.length > 0) {
            setSortedTeams(() => sortStandings(teams));
        }
    }, [teams]);
    if(Object.keys(sortedTeams).length > 0) {
    return(
        <div className='standingsTable'>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className='styledHeader'><p className='standingsText'>Name</p></TableCell>
                            <TableCell className='styledHeader'><p className='standingsText'>Games Played</p></TableCell>
                            <TableCell className='styledHeader'><p className='standingsText'>Wins</p></TableCell>
                            <TableCell className='styledHeader'><p className='standingsText'>Losses</p></TableCell>
                            <TableCell className='styledHeader'><p className='standingsText'>Ties</p></TableCell>
                            <TableCell className='styledHeader'><p className='standingsText'>Percent</p></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {sortedTeams.map((team) => {
                    return(
                        <TableRow>
                            <TableCell className='styledRow'><p className='standingsText'>{team.get("Name")}</p></TableCell>
                            <TableCell className='styledRow'><p className='standingsText'>{team.get("GamesPlayed")}</p></TableCell>
                            <TableCell className='styledRow'><p className='standingsText'>{team.get("Wins")}</p></TableCell>
                            <TableCell className='styledRow'><p className='standingsText'>{team.get("Losses")}</p></TableCell>
                            <TableCell className='styledRow'><p className='standingsText'>{team.get("Ties")}</p></TableCell>
                            <TableCell className='styledRow'><p className='standingsText'>{parseFloat(team.get("WinPct"))}</p></TableCell>
                        </TableRow>
                    );
                })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
    } else {
        return <CircularProgress/>;
    }
}

export default Standings;
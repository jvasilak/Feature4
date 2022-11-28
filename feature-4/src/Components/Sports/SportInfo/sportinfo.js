import React from 'react';
import { useLocation } from 'react-router-dom';


export const SportInfo = (props) => {
    const location = useLocation();
    console.log(location.state);
    return(<div>
        <h1>{location.state}</h1>
    </div>);
}
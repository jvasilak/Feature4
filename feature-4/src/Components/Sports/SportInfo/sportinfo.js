import React from 'react';

export const SportInfo = (props) => {

    return(<div>
        <h1>{props.sportName}</h1>
        <p>{props.sportInformation}</p>
    </div>);
}
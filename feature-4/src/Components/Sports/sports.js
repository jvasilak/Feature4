import React from 'react';
import SportsList from "./SportsList/sportslist";
  const Sports = (props) => {
    return (<div>
      <h1 className="pageHeader">Sports</h1>
      <SportsList />
    </div>);
  };
  
  export default Sports;
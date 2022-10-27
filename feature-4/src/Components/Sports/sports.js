import React from 'react';
import SportsList from "./SportsList/sportslist";
import Navigation from '../navigation';
  const Sports = (props) => {
    return (<><Navigation /><div>
      <h1 class="pageHeader">Sports</h1>
      <SportsList />
    </div></>);
  };
  
  export default Sports;
import React from 'react';

import { StyledBar } from './PlanetsListBar.css';

const PlanetsListBar = () => {
   return (
      <StyledBar>
         <span>Name</span>
         <span>Rotation Period</span>
         <span>Climate</span>
         <span>Gravity</span>
         <span>Created</span>
         <span>URL</span>
      </StyledBar>
   );
};

export default PlanetsListBar;

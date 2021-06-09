import React from 'react';

import { StyledBar } from './PlanetsListBar.css';

const PlanetsListBar = () => {
   return (
      <StyledBar>
         <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Creared</th>
            <th>Url</th>
         </tr>
      </StyledBar>
   );
};

export default PlanetsListBar;

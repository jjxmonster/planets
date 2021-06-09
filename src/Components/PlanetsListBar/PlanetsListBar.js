import React from 'react';

import { StyledBar } from './PlanetsListBar.css';

const PlanetsListBar = ({ sortType, changeSortType }) => {
   return (
      <StyledBar sortType={sortType}>
         <tr>
            <th>Name</th>
            <th
               className='filter-button'
               onClick={() =>
                  changeSortType(
                     sortType === 'ascending' ? 'descending' : 'ascending'
                  )
               }
            >
               Rotation Period{' '}
               <span className='material-icons-outlined material-icons'>
                  expand_more
               </span>
            </th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Creared</th>
            <th>API Url</th>
         </tr>
      </StyledBar>
   );
};

export default PlanetsListBar;

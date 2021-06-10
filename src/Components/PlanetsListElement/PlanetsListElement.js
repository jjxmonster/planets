import React from 'react';
import { StyledListElement } from './PlanetsListElement.css';

const PlanetsListElement = ({ planetDetails }) => {
   const { name, rotation_period, climate, gravity, created, url } =
      planetDetails;
   const date = created.substring(0, 10);
   const listElementLayout = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth < 750) {
         return (
            <>
               <StyledListElement>
                  <td>
                     <span>name:</span>
                     {name}
                  </td>
                  <td>
                     <span>rotation:</span>
                     {rotation_period}
                  </td>
                  <td>
                     <span>climate:</span>
                     {climate}
                  </td>
               </StyledListElement>
               <StyledListElement>
                  <td>
                     <span>gravity:</span>
                     {gravity}
                  </td>
                  <td>
                     <span>created:</span>
                     {date}
                  </td>
                  <td>
                     <a target='_blank' rel='noreferrer' href={url}>
                        <span>api:</span>click
                     </a>
                  </td>
               </StyledListElement>
            </>
         );
      } else {
         return (
            <StyledListElement>
               <td>{name}</td>
               <td>{rotation_period}</td>
               <td>{climate}</td>
               <td>{gravity}</td>
               <td>{date}</td>
               <td>
                  <a target='_blank' rel='noreferrer' href={url}>
                     click
                  </a>
               </td>
            </StyledListElement>
         );
      }
   };
   return listElementLayout();
};

export default PlanetsListElement;

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
                  <td>{name}</td>
                  <td>{rotation_period}</td>
                  <td>{climate}</td>
               </StyledListElement>
               <StyledListElement>
                  <td>{gravity}</td>
                  <td>{date}</td>
                  <td>
                     <a target='_blank' rel='noreferrer' href={url}>
                        click
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

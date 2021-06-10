import React, { useEffect, useState } from 'react';

import PlanetsListElement from '../PlanetsListElement';
import { StyledPlanetsList } from './PlanetsList.css';

const PlanetsList = ({ planets }) => {
   const [planetsToDisplay, setPlanetsToDisplay] = useState([]);

   useEffect(() => {
      setPlanetsToDisplay(
         planets.map(planet => {
            const { name, rotation_period, climate, gravity, created, url } =
               planet;
            return (
               <PlanetsListElement
                  planetDetails={{
                     name,
                     rotation_period,
                     climate,
                     gravity,
                     created,
                     url,
                  }}
               />
            );
         })
      );
   }, [planets]);

   return <StyledPlanetsList>{planetsToDisplay}</StyledPlanetsList>;
};

export default PlanetsList;

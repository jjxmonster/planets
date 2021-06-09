import React from 'react';

import PlanetsListElement from '../PlanetsListElement';
import { StyledPlanetsList } from './PlanetsList.css';

const PlanetsList = ({ planets }) => {
   const planetsMap = planets.map(planet => {
      const { name, rotation_period, climate, gravity, created, url } = planet;
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
   });

   return <StyledPlanetsList>{planetsMap}</StyledPlanetsList>;
};

export default PlanetsList;

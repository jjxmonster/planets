import React from 'react';
import { useQuery } from 'react-query';

import { getPlanets } from '../../Data/planets.fetch.js';

import PlanetsListBar from '../PlanetsListBar';
import { PlanetsSectionWrapper } from './PlanetsSection.css';

const PlanetsSection = () => {
   const { data: planets } = useQuery('planets', () => getPlanets());

   return (
      <PlanetsSectionWrapper>
         <PlanetsListBar />
      </PlanetsSectionWrapper>
   );
};

export default PlanetsSection;

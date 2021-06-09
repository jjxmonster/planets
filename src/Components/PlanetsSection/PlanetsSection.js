import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { getPlanets } from '../../Data/planets.fetch.js';

import Pagination from './Pagination';
import PlanetsListBar from '../PlanetsListBar';
import PlanetsList from '../PlanetsList';
import { PlanetsSectionWrapper } from './PlanetsSection.css';

const PlanetsSection = () => {
   const { data: planets } = useQuery('planets', () => getPlanets());

   const [currentPage, setCurrentPage] = useState(1);
   const [planetsPerPage] = useState(5);
   const [sortAscendingOrdescendingByRotation, setSortType] =
      useState('ascending');

   const indexOfLastPlanet = currentPage * planetsPerPage;
   const indexOfFirstPlanet = indexOfLastPlanet - planetsPerPage;
   const currentPlanets = planets.results.slice(
      indexOfFirstPlanet,
      indexOfLastPlanet
   );

   const paginate = pageNumber => setCurrentPage(pageNumber);

   return (
      <PlanetsSectionWrapper>
         <table>
            <PlanetsListBar />
            <PlanetsList planets={currentPlanets} />
         </table>
         <Pagination
            activePage={currentPage}
            planetsPerPage={planetsPerPage}
            totalPlanets={planets.results.length}
            paginate={paginate}
         />
      </PlanetsSectionWrapper>
   );
};

export default PlanetsSection;

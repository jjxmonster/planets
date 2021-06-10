import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { getPlanets } from '../../Data/planets.fetch.js';

import Pagination from './Pagination';
import PlanetsListBar from '../PlanetsListBar';
import PlanetsList from '../PlanetsList';
import { PlanetsSectionWrapper } from './PlanetsSection.css';

const PlanetsSection = () => {
   const { data: planets } = useQuery('planets', () => getPlanets());
   const { results } = planets;

   const [currentPage, setCurrentPage] = useState(1);
   const [planetsPerPage] = useState(5);
   const [sortAscendingOrdescendingByRotation, setSortType] =
      useState('ascending');
   const [filteredPlanets, setFilteredPlanets] = useState([]);

   const indexOfLastPlanet = currentPage * planetsPerPage;
   const indexOfFirstPlanet = indexOfLastPlanet - planetsPerPage;
   const currentPlanets = filteredPlanets.slice(
      indexOfFirstPlanet,
      indexOfLastPlanet
   );

   const paginate = pageNumber => setCurrentPage(pageNumber);
   const changeSortType = type => {
      setSortType(type);
   };

   useEffect(() => {
      switch (sortAscendingOrdescendingByRotation) {
         case 'ascending':
            return setFilteredPlanets(
               results.sort((a, b) => {
                  return a.rotation_period - b.rotation_period;
               })
            );

         case 'descending':
            return setFilteredPlanets(
               results.sort((a, b) => {
                  return b.rotation_period - a.rotation_period;
               })
            );
         default:
            break;
      }
   }, [results, sortAscendingOrdescendingByRotation]);

   return (
      <PlanetsSectionWrapper>
         <table>
            <PlanetsListBar
               sortType={sortAscendingOrdescendingByRotation}
               changeSortType={changeSortType}
            />
            <PlanetsList planets={currentPlanets} />
         </table>
         <Pagination
            activePage={currentPage}
            planetsPerPage={planetsPerPage}
            totalPlanets={results.length}
            paginate={paginate}
         />
      </PlanetsSectionWrapper>
   );
};

export default PlanetsSection;

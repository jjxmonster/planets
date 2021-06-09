import styled from 'styled-components';

export const StyledPlanetsList = styled.tbody`
   width: 100%;
   height: 5%;
   color: white;
   font-size: 2vh;
   @media (min-width: 750px) {
      > tr:nth-child(odd) {
         background: rgba(255, 255, 255, 0.2);
      }
   }
   @media (max-width: 750px) {
      > tr:nth-child(4n-7) {
         background: rgba(255, 255, 255, 0.2);
      }
      > tr:nth-last-child(4n-7) {
         background: rgba(255, 255, 255, 0.2);
      }
   }
`;

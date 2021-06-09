import styled from 'styled-components';

// export const StyledPlanetsList = styled.ul`
//    flex: 5;
//    display: flex;
//    flex-direction: column;
// `;

export const StyledPlanetsList = styled.tbody`
   width: 100%;
   height: 5%;
   color: white;
   font-size: 2vh;
   > tr:nth-child(odd) {
      background: rgba(255, 255, 255, 0.2);
   }
`;

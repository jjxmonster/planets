import styled from 'styled-components';

export const PlanetsSectionWrapper = styled.section`
   flex: 8;
   display: flex;
   flex-direction: column;
`;

export const StyledListNavigation = styled.nav`
   flex: 2;
   display: flex;
   > ul {
      flex: 1;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      > li {
         overflow: hidden;
         width: 5vh;
         height: 5vh;
         border: 2px solid white;
         color: white;
         font-size: 2vh;
         margin-right: 10px;
         display: flex;
         align-items: center;
         justify-content: center;
      }
   }
`;

export const StyledNavigationContent = styled.span`
   color: ${({ active }) =>
      active === 'true' ? 'rgba(255,255,255,0.4)' : 'white'};
   padding: 20px;
   &:hover {
      cursor: pointer;
   }
`;

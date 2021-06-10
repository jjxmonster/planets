import styled from 'styled-components';

export const StyledListElement = styled.tr`
   color: white;
   text-align: center;
   @media (max-width: 750px) {
      font-size: 1.5vh;
   }
   > td span {
      opacity: 0.7;
   }
`;

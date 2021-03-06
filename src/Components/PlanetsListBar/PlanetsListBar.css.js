import styled from 'styled-components';

export const StyledBar = styled.thead`
@media (max-width: 750px) {
   display:none;
}
   > tr th {
      text-align: center;
      text-transform: uppercase;
      font-weight: 300;
      font-size:2vh;
   }
   > tr .filter-button {
      cursor: pointer;
      >span{
         transition:.2s ease;
         transform:rotate(180deg);
         ${({ sortType }) =>
            sortType === 'ascending'
               ? 'transform:rotate(180deg);'
               : 'transform:rotate(0deg);'}}
   }
   }
`;

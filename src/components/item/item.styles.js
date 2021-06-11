import styled from 'styled-components';

export const ListItem = styled.li`
padding: 10px 15px;
display: flex;
justify-content: space-between;
color: ${({ done }) => done ? 'red' : '#61DAFB'}; 

&:not(:last-child){
    border-bottom: 1px solid #2D2D2D;
  }
`;

export const ListText = styled.div`
  font-size: 14px;
`;

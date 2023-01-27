import styled from 'styled-components';

export const ListUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin-bottom: 0;
  margin-top: 20px;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 300px;
  justify-content: space-between;
`;

export const ContactText = styled.p`
  margin: 0 0 0 25px;
  font-size: 16px;
  font-weight: 500;
`;

export const ContactBtn = styled.button`
  border-radius: 5px;
  border: 0px;
  height: 20px;
  width: 50px;
  cursor: pointer;
  transition: all 200ms cubic-bezier(0.15, 0.52, 0.6, 0.69);
  &:hover,
  :focus {
    background-color: #00b9ff;
    box-shadow: 3px 3px 10px -1px rgba(219, 213, 213, 0.75);
  }
`;

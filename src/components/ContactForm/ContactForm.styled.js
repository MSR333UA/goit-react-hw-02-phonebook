import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;

  margin: 50px 0;
`;

export const FormLabel = styled.label`
  font-weight: 500;
  font-size: 22px;
`;

export const FormInput = styled.input`
  width: 200px;
  height: 25px;
  border-radius: 5px;

  cursor: pointer;
`;

export const FormBtn = styled.button`
  border-radius: 5px;
  border: 0px;
  height: 35px;
  width: 100px;
  transition: all 200ms cubic-bezier(0.15, 0.52, 0.6, 0.69);
  cursor: pointer;
  &:hover,
  :focus {
    background-color: #00b9ff;
    box-shadow: 3px 3px 10px -1px rgba(219, 213, 213, 0.75);
  }
`;

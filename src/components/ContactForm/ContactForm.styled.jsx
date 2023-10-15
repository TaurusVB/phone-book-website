import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  background-color: inherit;
  padding: 20px;
  backdrop-filter: blur(15px);
  border: 2px solid #5ea4ed;
`;

export const Label = styled.label`
  font-size: 30px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 30px;
`;

export const Button = styled.button`
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  font-size: 25px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

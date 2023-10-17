import styled from '@emotion/styled';

export const Input = styled.input`
  width: 100%;
  height: 40px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 20px;
  padding: 0 35px 0 5px;
  font-weight: 600;
  color: #fff;

  &:focus ~ label,
  &:valid ~ label {
    top: -5px;
  }
`;

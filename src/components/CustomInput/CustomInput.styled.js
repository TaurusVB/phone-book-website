import styled from '@emotion/styled';
import colors from 'utils/colorVaribals';

export const Input = styled.input`
  width: 100%;
  height: 40px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1em;
  padding: 0 35px 0 5px;
  font-weight: 600;
  color: #222e3b;

  &:focus ~ label,
  &:valid ~ label {
    top: -5px;
  }
`;

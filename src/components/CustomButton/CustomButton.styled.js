import styled from '@emotion/styled';
import colors from 'utils/colorVaribals';

export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  border-radius: 40px;
  background: ${colors.mainBlue};
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  transition: all 0.3s;

  &:hover {
    scale: 1.1;
  }
`;

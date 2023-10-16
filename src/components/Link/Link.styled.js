import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import colors from 'utils/colorVaribals';

export const NaLink = styled(NavLink)`
  display: flex;
  align-items: center;

  font-size: 34px;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #fff;
  transition: all 0.3s;

  &:hover {
    color: ${colors.gray};
    scale: 1.1;
  }

  &.active {
    color: ${colors.gray};
    text-decoration: underline;
  }
`;

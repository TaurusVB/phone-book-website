import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import colors from 'utils/colorVaribals';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;

  font-size: 20px;
  padding: 12px;
  font-weight: 700;
  color: #fff;

  transition: all 0.3s;
  &:active,
  &:hover {
    color: ${colors.gray};
    scale: 1.1;
  }
`;

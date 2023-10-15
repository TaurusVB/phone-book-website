import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const CustomNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #fff;
  &:active {
    color: #e84a5f;
  }
`;

import { useAuth } from 'hooks';
import { CustomNav, Link } from './Navigation.styled';
export const Navigation = ({ children }) => {
  const { isLoggedIn } = useAuth();

  return (
    <CustomNav>
      {children}
      {isLoggedIn && <Link to="/contacts">Tasks</Link>}
    </CustomNav>
  );
};

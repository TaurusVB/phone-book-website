import { useAuth } from 'hooks';
import { Link } from './Navigation.styled';
export const Navigation = ({ children }) => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      {children}
      {isLoggedIn && <Link to="/contacts">Tasks</Link>}
    </nav>
  );
};

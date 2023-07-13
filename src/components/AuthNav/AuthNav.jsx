import { Link } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <>
      <Link to={'/Register'}>Register</Link>
      <Link to={'/Login'}>Login</Link>
    </>
  );
};

export default AuthNav;

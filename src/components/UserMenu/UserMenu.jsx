import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Wrapper, Username } from './UserMenu.styled';
import { useAuth } from 'hooks';
import Link from 'components/Link/Link';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import { IconButton, Tooltip } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useAuth();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Wrapper>
      {isLoggedIn && (
        <Link to="/contacts" style={{ marginRight: '50px' }}>
          Contacts
        </Link>
      )}
      <Username>Welcome, {user.name}</Username>
      <Tooltip title="Log out" arrow>
        <IconButton color="inherit" onClick={handleLogOut}>
          <LogoutSharpIcon sx={{ fontSize: '36px' }} />
        </IconButton>
      </Tooltip>
    </Wrapper>
  );
};

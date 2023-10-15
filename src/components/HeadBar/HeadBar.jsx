import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { Toolbar, Container, AppBar, Typography } from '@mui/material';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import Link from 'components/Link/Link';

const HeadBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar position='static'>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ flexGrow: 1 }}>
          <Navigation>
            <Link to="/">
              <Typography variant="h6" component="p">
                PhoneBook
              </Typography>
              <MenuBookTwoToneIcon />
            </Link>
          </Navigation>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default HeadBar;

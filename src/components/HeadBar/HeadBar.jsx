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
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ flexGrow: 1 }}>
          <Navigation>
            <Link to="/">
              <Typography variant="h3" component="p">
                PhoneBook
              </Typography>
              <MenuBookTwoToneIcon sx={{ fontSize: '56px', ml: '20px' }} />
            </Link>
            <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>
          </Navigation>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default HeadBar;

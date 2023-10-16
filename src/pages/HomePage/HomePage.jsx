import {
  Container,
  ContainerImg,
  Img,
  List,
  ListItem,
  MainTitle,
  Wrapper,
} from './HomePage.styled';
import Text from 'components/Text/Text';
import 'animate.css';

const HomePage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <Container>
        <Wrapper>
          <MainTitle>About Phonebook</MainTitle>
          <Text>
            Phonebook is a simple web application that allows you to store and
            manage your contact information. No more losing phone numbers or
            email addresses - keep everything organized here!
          </Text>
        </Wrapper>

        <Wrapper>
          <MainTitle>Features</MainTitle>
          <List>
            <ListItem>Add new contacts with a name and phone number.</ListItem>
            <ListItem>View and edit your contact list.</ListItem>
            <ListItem>Delete contacts you no longer need.</ListItem>
          </List>
        </Wrapper>

        <Wrapper>
          <MainTitle>Getting Started</MainTitle>
          <Text>
            Ready to start using Phonebook? Follow these simple steps:
          </Text>
          <List>
            <ListItem>
              1. Click on "Add Contact" to add a new contact to your list.
            </ListItem>
            <ListItem>
              2. Fill in the name and phone number and click "Add Contact."
            </ListItem>
            <ListItem>
              3. Click on "Contact List" to view, edit, or delete your contacts.
            </ListItem>
          </List>
        </Wrapper>
      </Container>
      <ContainerImg>
        <Img
          src="https://res.cloudinary.com/dvlinx4rz/image/upload/v1697393965/backforpage_h7d34y.jpg"
          width="350"
        />
      </ContainerImg>
    </div>
  );
};

export default HomePage;

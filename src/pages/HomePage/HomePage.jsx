import { Section } from 'ui/Section';
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
    <Container>
      <div>
        <Section className="animate__backInLeft">
          <Wrapper>
            <MainTitle>About Phonebook</MainTitle>
            <Text>
              Phonebook is a simple web application that allows you to store and
              manage your contact information. No more losing phone numbers or
              email addresses - keep everything organized here!
            </Text>
          </Wrapper>
        </Section>

        <Section>
          <Wrapper>
            <MainTitle>Features</MainTitle>
            <List>
              <ListItem>
                Add new contacts with a name and phone number.
              </ListItem>
              <ListItem>View and edit your contact list.</ListItem>
              <ListItem>Delete contacts you no longer need.</ListItem>
            </List>
          </Wrapper>
        </Section>

        <Section>
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
                3. Click on "Contact List" to view, edit, or delete your
                contacts.
              </ListItem>
            </List>
          </Wrapper>
        </Section>
      </div>
      <ContainerImg>
        <Img
          src="https://res.cloudinary.com/dvlinx4rz/image/upload/v1697393965/backforpage_h7d34y.jpg"
          width="350"
        />
      </ContainerImg>
    </Container>
  );
};

export default HomePage;

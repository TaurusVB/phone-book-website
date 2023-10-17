import { ContactForm } from 'components/ContactForm/ContactForm';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { Container, WrapperForContacts } from './ContactsPage.styled';

const ContactsPage = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  // const Error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <ContactForm />
      <WrapperForContacts>
        <Filter />
        <Contacts />
      </WrapperForContacts>
    </Container>
  );
};

export default ContactsPage;

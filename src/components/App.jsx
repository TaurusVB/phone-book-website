import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { MainTitle, ContactsTitle, AppDiv } from './App.styled';
import { Layout } from './Layout/Layout';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operationsAPI';
import { useDispatch } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return (
    <Layout>
      <AppDiv>
        {' '}
        <MainTitle>PhoneBook</MainTitle>
        <ContactForm />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter />
        <Contacts />
      </AppDiv>
    </Layout>
  );
};

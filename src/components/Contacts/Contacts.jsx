import { ContactsList } from './Contacts.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import {
  getContacts,
  getError,
  getFilterValue,
  getIsLoading,
} from 'redux/selectors';
import { Loader } from 'components/Loader/Loader';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';

export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const Error = useSelector(getError);

  const filterValue = useSelector(getFilterValue);

  const normalizedFilter = filterValue.toLowerCase();

  const filteredСontacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      {isLoading && <Loader />}
      {Error && <ErrorMessage children={Error} />}
      {!isLoading && !Error && (
        <ContactsList>
          {filteredСontacts.map(contact => {
            return <ContactItem contact={contact} key={contact.id} />;
          })}
        </ContactsList>
      )}
    </>
  );
};

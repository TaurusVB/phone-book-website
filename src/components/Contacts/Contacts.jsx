import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import {
  getContacts,
  getError,
  getFilterValue,
  getIsLoading,
} from 'redux/contacts/selectors';
import Loader from 'components/Loader/Loader';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { Grid } from '@mui/material';
import Text from 'components/Text/Text';

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
      {!isLoading &&
        !Error &&
        (filteredСontacts.length !== 0 ? (
          <Grid container spacing={2}>
            {filteredСontacts.map(contact => {
              return <ContactItem contact={contact} key={contact.id} />;
            })}
          </Grid>
        ) : filterValue.length !== 0 ? (
          <Text>There is no name with the name {filterValue}</Text>
        ) : (
          <Text>There are no contacts yet!</Text>
        ))}
    </>
  );
};

import { ContactLiItem, ContactText, DeleteBtn } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import PropTypes from 'prop-types';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <ContactLiItem key={contact.id}>
      <ContactText>
        {contact.name}: {contact.number}
      </ContactText>
      <DeleteBtn name={contact.name} onClick={handleDelete}>
        delete
      </DeleteBtn>
    </ContactLiItem>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    number: PropTypes.string,
    name: PropTypes.string,
  }),
};

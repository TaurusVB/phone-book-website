import { ContactLiItem, ContactText, DeleteBtn } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <Grid xs={12} md={4} item>
      <ContactLiItem key={contact.id}>
        <ContactText>{contact.name}</ContactText>
        <ContactText>{contact.number}</ContactText>
        <DeleteBtn onClick={handleDelete}>
          Delete contact <DeleteSweepIcon fontSize="14px" sx={{ ml: '8px' }} />
        </DeleteBtn>
      </ContactLiItem>
    </Grid>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    number: PropTypes.string,
    name: PropTypes.string,
  }),
};

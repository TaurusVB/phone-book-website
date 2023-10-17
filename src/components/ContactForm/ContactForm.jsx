import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';
import Form from 'components/Form/Form';
import InputBox from 'components/InputBox/InputBox';
import CustomButton from 'components/CustomButton/CustomButton';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispath = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameId = nanoid();
  const numberId = nanoid();

  const handleChange = evt => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const normalizedName = name.toLowerCase();
    const isAlreadyInContacts = contacts.find(
      contact => contact.name.toLowerCase() === normalizedName
    );
    if (isAlreadyInContacts) {
      alert(`${name} is already in contacts`);
      formReset();
      return;
    }

    dispath(addContact({ name, number }));
    formReset();
  };

  const formReset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form
      onSubmit={handleSubmit}
      autoComplete={'off'}
      style={{
        height: '315px',
        width: '350px',
        margin: '0 60px 0 0',
        padding: '0 30px',
      }}
    >
      <div>
        <InputBox
          name="name"
          typeInput="text"
          labelName="Name"
          forAndId={nameId}
          value={name}
          onChange={handleChange}
          pattern="[A-Za-z0-9]+"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
        <InputBox
          name="number"
          typeInput="text"
          labelName="Number"
          forAndId={numberId}
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />

        <CustomButton text={'Add contact'}>
          <ContactPhoneIcon fontSize='16px' sx={{ml: '8px'}}/>
        </CustomButton>
      </div>
    </Form>
  );
};

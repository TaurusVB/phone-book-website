import Form from 'components/Form/Form';
import InputBox from 'components/InputBox/InputBox';
import Title from 'components/Title/Title';
import { useDispatch } from 'react-redux';
import { logIn, register } from 'redux/auth/operations';
import AlternateEmailTwoToneIcon from '@mui/icons-material/AlternateEmailTwoTone';
import HttpsTwoToneIcon from '@mui/icons-material/HttpsTwoTone';
import Person2SharpIcon from '@mui/icons-material/Person2Sharp';
import stylesForIcon from 'utils/stylesForIcons';
import RememberMeComponent from 'components/RememberMeComponent/RememberMeComponent';
import CustomButton from 'components/CustomButton/CustomButton';
import { Container } from './CustomForm.styled';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const CustomForm = ({ type }) => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    if (type === 'LogIn') {
      dispatch(
        logIn({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
    }

    if (type === 'LogUp') {
      dispatch(
        register({
          name: form.elements.name.value,
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
    }

    form.reset();
  };

  const handleChange = evt => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case 'name':
        setNickname(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <div>
        <Title>{type === 'LogIn' ? 'Sign in' : 'Sign up'}</Title>

        {type === 'LogUp' && (
          <InputBox
            typeInput="name"
            name="name"
            forAndId="name"
            labelName="Name"
            pattern="[a-zA-Z0-9]+"
            value={nickname}
            onChange={handleChange}
          >
            <Person2SharpIcon sx={stylesForIcon} />
          </InputBox>
        )}

        <InputBox
          typeInput="email"
          name="email"
          forAndId="email"
          labelName="Email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          value={email}
          onChange={handleChange}
        >
          <AlternateEmailTwoToneIcon sx={stylesForIcon} />
        </InputBox>

        <InputBox
          typeInput="password"
          name="password"
          forAndId="password"
          labelName="Password"
          pattern="password"
          value={password}
          onChange={handleChange}
        >
          <HttpsTwoToneIcon sx={stylesForIcon} />
        </InputBox>
        <RememberMeComponent type={type} />
        <CustomButton text={type === 'LogUp' ? 'Sign up' : 'Sign in'} />
        <Container>
          {type === 'LogIn' && (
            <p>
              Don't have a account? <NavLink to="/register">Sign Up</NavLink>
            </p>
          )}

          {type === 'LogUp' && (
            <p>
              Already have a account? <NavLink to="/login">Sign in</NavLink>
            </p>
          )}
        </Container>
      </div>
    </Form>
  );
};

export default CustomForm;

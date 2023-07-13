import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const RegistrationForm = () => {
  const dispach = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispach(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label>
        Username
        <input type="name" name="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};

export default RegistrationForm;

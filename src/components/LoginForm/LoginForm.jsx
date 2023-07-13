import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const LoginForm = () => {
  const dispach = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispach(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
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

export default LoginForm;

import { FormWrapper } from './Form.styled';

const Form = ({ children, autoComplete, onSubmit }) => {
  return (
    <FormWrapper onSubmit={onSubmit} autoComplete={autoComplete}>
      {children}
    </FormWrapper>
  );
};

export default Form;

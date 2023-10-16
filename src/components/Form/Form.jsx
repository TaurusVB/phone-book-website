import { FormWrapper } from './Form.styled';

const Form = ({ children, autoComplete, onSubmit, style }) => {
  return (
    <FormWrapper onSubmit={onSubmit} autoComplete={autoComplete} style={style}>
      {children}
    </FormWrapper>
  );
};

export default Form;

import { Input } from './CustomInput.styled';

const CustomInput = ({ type, id, name, pattern }) => {
  return <Input type={type} id={id} name={name} required pattern={pattern} />;
};

export default CustomInput;

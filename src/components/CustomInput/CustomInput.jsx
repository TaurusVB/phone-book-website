import { Input } from './CustomInput.styled';

const CustomInput = ({
  type = null,
  id = null,
  name = null,
  pattern = null,
  value = null,
  onChange = null,
  title = null,
}) => {
  return (
    <Input
      type={type}
      id={id}
      name={name}
      required
      pattern={pattern}
      value={value}
      onChange={onChange}
      title={title}
    />
  );
};

export default CustomInput;

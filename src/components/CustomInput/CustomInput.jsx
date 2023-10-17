import { Input } from './CustomInput.styled';

const CustomInput = ({
  type = null,
  id = null,
  name = null,
  pattern = null,
  value = '',
  onChange = () => {},
  title = null,
  style,
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
      style={style}
    />
  );
};

export default CustomInput;

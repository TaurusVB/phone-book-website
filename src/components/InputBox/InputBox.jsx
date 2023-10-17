import CustomInput from 'components/CustomInput/CustomInput';
import { Wrapper } from './InputBox.styled';
import CustomLabel from 'components/CustomLabel/CustomLabel';

const InputBox = ({
  children,
  typeInput,
  forAndId,
  labelName,
  name,
  onChange = null,
  value,
  style,
  styleForBox,
}) => {
  return (
    <Wrapper style={styleForBox}>
      {children}
      <CustomInput
        id={forAndId}
        type={typeInput}
        name={name}
        onChange={onChange}
        value={value}
        style={style}
      />
      <CustomLabel labelName={labelName} htmlFor={forAndId} />
    </Wrapper>
  );
};

export default InputBox;

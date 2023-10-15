import CustomInput from 'components/CustomInput/CustomInput';
import { Wrapper } from './InputBox.styled';
import CustomLabel from 'components/CustomLabel/CustomLabel';

const InputBox = ({ children, typeInput, forAndId, labelName, name }) => {
  return (
    <Wrapper>
      {children}
      <CustomInput id={forAndId} type={typeInput} name={name} />
      <CustomLabel labelName={labelName} htmlFor={forAndId} />
    </Wrapper>
  );
};

export default InputBox;

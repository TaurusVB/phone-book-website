import { Label } from './CustomLabel.styled';

const CustomLabel = ({ labelName, htmlFor }) => {
  return <Label htmlFor={htmlFor}>{labelName}</Label>;
};

export default CustomLabel;

const { Btn } = require('./CustomButton.styled');

const CustomButton = ({ text }) => {
  return <Btn type="submit">{text}</Btn>;
};

export default CustomButton;

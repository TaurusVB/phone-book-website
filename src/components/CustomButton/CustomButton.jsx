const { Btn } = require('./CustomButton.styled');

const CustomButton = ({ text, onClick, children }) => {
  return (
    <Btn type="submit">
      {text}
      {children}
    </Btn>
  );
};

export default CustomButton;

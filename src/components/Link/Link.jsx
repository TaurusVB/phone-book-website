import { NaLink } from './Link.styled';

const Link = ({ to, children }) => {
  return <NaLink to={to}>{children}</NaLink>;
};

export default Link;

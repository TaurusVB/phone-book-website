import { NaLink } from './Link.styled';

const Link = ({ to, children, style }) => {
  return (
    <NaLink to={to} style={style}>
      {children}
    </NaLink>
  );
};

export default Link;

import { NavLink } from 'react-router-dom';
import { Wrapper } from './RememberMeComponent.styled';

const RememberMeComponent = ({ type }) => {
  return (
    <Wrapper>
      <label>
        Remember me
        <input type="checkbox" />
      </label>
      {type !== 'LogUp' && (
        <label>
          <NavLink to="#">Forgot password?</NavLink>
        </label>
      )}
    </Wrapper>
  );
};

export default RememberMeComponent;

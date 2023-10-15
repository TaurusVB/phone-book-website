import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0 15px;
  font-size: 0.9em;
  color: #fff;

  & label {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
  }

  & label input[type='checkbox'] {
    margin-right: 6px;
  }

  & label a {
    color: #fff;
    text-decoration: none;
  }

  & label a:hover {
    text-decoration: underline;
  }
`;

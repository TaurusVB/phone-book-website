import styled from '@emotion/styled';
import colors from 'utils/colorVaribals';

export const ContactLiItem = styled.li`
  height: 105px;
  padding: 5px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  background-color: inherit;
  padding: 20px;
  backdrop-filter: blur(15px);
  border: 2px solid #5ea4ed;
`;

export const ContactText = styled.p`
  text-align: center;
  font-size: 20px;
  color: #fff;
`;

export const DeleteBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  border-radius: 40px;
  background: ${colors.mainBlue};
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  transition: all 0.3s;

  &:hover {
    scale: 1.1;
  }
`;

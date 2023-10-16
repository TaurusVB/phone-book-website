import styled from '@emotion/styled';
import colors from 'utils/colorVaribals';

export const Container = styled.div`
  padding: 30px 20px;

  background: transparent;
  border: 2px solid rgba(94, 164, 237, 0.5);
  border-radius: 20px;
  backdrop-filter: blur(15px);
`;

export const Wrapper = styled.div`
  margin-top: 15px;
`;

export const MainTitle = styled.p`
  font-size: 2em;
  color: #fff;
`;

export const List = styled.ul`
  padding: 15px;
  color: #fff;
`;

export const ListItem = styled.li`
  color: #fff;
`;

export const ContainerImg = styled.div`
  text-align: center;
`;

export const Img = styled.img`
  border-radius: 14px;
  border: 1px solid ${colors.mainBlue};
`;

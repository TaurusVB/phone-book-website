import HeadBar from 'components/HeadBar/HeadBar';
import { LayoutContainer } from './Layout.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import WrapperContainer from 'components/WrapperContainer/WrapperContainer';
import { Section } from 'ui/Section';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <HeadBar />

      <LayoutContainer>
        <Section>
          <WrapperContainer>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </WrapperContainer>
        </Section>
      </LayoutContainer>
    </>
  );
};

export default Layout;

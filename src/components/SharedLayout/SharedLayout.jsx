import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<h1>LOADING...</h1>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default SharedLayout;

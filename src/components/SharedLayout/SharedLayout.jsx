import { Outlet } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';

const SharedLayout = () => {
  const [scrollBtnVisible, setScrollBtnVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setScrollBtnVisible(true);
    } else {
      setScrollBtnVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      <Header />
      <Suspense fallback={<h1>LOADING...</h1>}>
        <Outlet />
      </Suspense>
      <Footer />
      <ScrollToTop scrollBtnVisible={scrollBtnVisible} />
    </>
  );
};

export default SharedLayout;

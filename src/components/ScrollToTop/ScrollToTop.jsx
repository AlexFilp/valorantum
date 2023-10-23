import React from 'react';

import { Btn, StyledArrow } from './ScrollToTop.tyled';

const ScrollToTop = ({ scrollBtnVisible }) => {
  const doScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Btn
      onClick={doScrollToTop}
      $scrollBtnVisible={scrollBtnVisible.toString()}
    >
      <StyledArrow />
    </Btn>
  );
};

export default ScrollToTop;

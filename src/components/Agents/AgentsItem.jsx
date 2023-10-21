import React from 'react';
import { Lishka, Peshechkla } from './AgentsItemStyled';

const AgentsItem = ({displayName, fullPortrait, uuid}) => {
  return (
    <Lishka>
      <img src={fullPortrait} alt="" />
      <Peshechkla>{displayName}</Peshechkla>
    </Lishka>
  );
};

export default AgentsItem;

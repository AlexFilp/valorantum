import React from 'react';
import { AgentsItemImg, AgentsItemLi, AgentsItemP} from './AgentsItemStyled';

const AgentsItem = ({displayName, fullPortrait, uuid}) => {
  return (
    <AgentsItemLi>
      <AgentsItemImg src={fullPortrait} alt={displayName} />
      <AgentsItemP>{displayName}</AgentsItemP>
    </AgentsItemLi>
  );
};

export default AgentsItem;

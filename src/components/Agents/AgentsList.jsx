import { getAgents } from 'api/api';
import React, { useEffect, useState } from 'react';
import AgentsItem from './AgentsItem';
import { AgentsListUl } from './AgentsListStyled';

const AgentsList = () => {
  const [agents, setAgents] = useState([]);
  useEffect(() => {
    getAgents().then(data => {
      // console.log(data)
      setAgents(data);
    });
  }, []);

  return (
    <AgentsListUl>
      {agents
        .filter(agent => agent.isPlayableCharacter === true)
        .map(({ displayName, fullPortrait, uuid }) => (
          <AgentsItem
            displayName={displayName}
            fullPortrait={fullPortrait}
            key={uuid}
            uuid={uuid}
          />
        ))}
    </AgentsListUl>
  );
};

export default AgentsList;

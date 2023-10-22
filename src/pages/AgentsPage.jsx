import AgentsList from 'components/Agents/AgentsList';
import { AgentsPageSection } from './AgentsPage.styled';
import Container from 'components/Container/Container';

const AgentsPage = () => {
  return (
    <AgentsPageSection>
      <Container>
        <AgentsList />
      </Container>
    </AgentsPageSection>
  );
};

export default AgentsPage;

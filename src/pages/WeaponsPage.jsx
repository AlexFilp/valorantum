import Container from 'components/Container/Container';
import WeaponsList from 'components/Weapons/WeaponsList';

const WeaponsPage = () => {
  return (
    <div style={{ flexGrow: 1 }}>
      <Container>
        <WeaponsList />
      </Container>
    </div>
  );
};

export default WeaponsPage;

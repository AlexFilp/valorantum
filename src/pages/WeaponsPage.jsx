import Container from 'components/Container/Container';
import WeaponsList from 'components/Weapons/WeaponsList';

const WeaponsPage = () => {
  return (
    <section style={{ flexGrow: 1 }}>
      <Container>
        <WeaponsList />
      </Container>
    </section>
  );
};

export default WeaponsPage;

import { getWeapons } from 'api/api';
import { useEffect, useState } from 'react';
import WeaponsItem from './WeaponsItem';
import { List, ListWrapper, Wrapper } from './WeaponsList.styled';
import WeaponsFilter from './WeaponsFilter/WeaponsFilter';
import { filterWeapons } from 'helpers/filterWeapons';

const WeaponsList = () => {
  const [weapons, setWeapons] = useState({});
  const [weaponsFilter, setWeaponsFilter] = useState('Sidearm');
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    getWeapons()
      .then(data => {
        console.log(filterWeapons(data));
        setWeapons(filterWeapons(data));
      })
      .catch(err => console.log(err))
      .finally(() => {
        setloading(false);
      });
  }, []);

  console.log(
    'weaponsFilter === weapons[weaponsFilter]',
    weaponsFilter === weapons[weaponsFilter]
  );

  const filteredWeapons = weapons[weaponsFilter] || [];

  return (
    <Wrapper>
      <WeaponsFilter setWeaponsFilter={setWeaponsFilter} />
      <ListWrapper>
        {loading && <h1>Loadong...</h1>}
        {!loading && (
          <List>
            {filteredWeapons.map(weapon => (
              <WeaponsItem key={weapon.uuid} weapon={weapon} />
            ))}
          </List>
        )}
      </ListWrapper>
    </Wrapper>
  );
};

export default WeaponsList;

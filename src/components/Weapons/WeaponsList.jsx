import { getWeapons } from 'api/api';
import { useEffect, useState } from 'react';
import WeaponsItem from './WeaponsItem';
import { List, ListWrapper, Wrapper } from './WeaponsList.styled';
import WeaponsFilter from './WeaponsFilter/WeaponsFilter';
import { filterWeapons } from 'helpers/filterWeapons';

const WeaponsList = () => {
  const [allWeapons, setAllWeapons] = useState([]);
  const [weapons, setWeapons] = useState({});
  const [weaponsFilter, setWeaponsFilter] = useState('All');
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    getWeapons()
      .then(data => {
        console.log('data', data);
        console.log('filterWeapons(data)', filterWeapons(data));
        setAllWeapons(data);
        setWeapons(filterWeapons(data));
      })
      .catch(err => console.log(err))
      .finally(() => {
        setloading(false);
      });
  }, []);

  const filteredWeapons = weapons[weaponsFilter] || allWeapons;

  return (
    <Wrapper>
      <WeaponsFilter setWeaponsFilter={setWeaponsFilter} />
      <ListWrapper>
        {loading && <h1>Loading...</h1>}
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

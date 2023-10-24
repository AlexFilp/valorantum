import { getWeapons } from 'api/api';
import { useEffect, useState } from 'react';
import WeaponsItem from './WeaponsItem';
import { List, ListWrapper } from './WeaponsList.styled';

const WeaponsList = () => {
  const [weapons, setWeapons] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    getWeapons()
      .then(data => {
        setWeapons(data);
      })
      .catch(err => console.log(err))
      .finally(() => {
        setloading(false);
      });
  }, []);
  return (
    <ListWrapper>
      {loading && <h1>111111111111111</h1>}
      {!loading && (
        <List>
          {weapons.map(weapon => (
            <WeaponsItem key={weapon.uuid} weapon={weapon} />
          ))}
        </List>
      )}
    </ListWrapper>
  );
};

export default WeaponsList;

import { Item, Name, NameWRapper } from './WeaponsItem.styled';

const WeaponsItem = ({ weapon }) => {
  return (
    <Item>
      <div>
        <img src={weapon.displayIcon} alt={weapon.displayName} />
      </div>
      <NameWRapper>
        <Name>{weapon.displayName}</Name>
      </NameWRapper>
    </Item>
  );
};

export default WeaponsItem;

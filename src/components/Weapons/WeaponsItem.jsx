import {
  Image,
  ImageWrapper,
  Item,
  Name,
  NameWRapper,
} from './WeaponsItem.styled';

const WeaponsItem = ({ weapon }) => {
  return (
    <Item>
      <div>
        <img
          src={weapon.displayIcon}
          alt={weapon.displayName}
          width="200"
          height="200"
        />
      </div>
      <NameWRapper>
        <Name>{weapon.displayName}</Name>
      </NameWRapper>
    </Item>
  );
};

export default WeaponsItem;

import React, { useState } from 'react';
import {
  Btn,
  BtnList,
  Item,
  Option,
  SelectInput,
} from './WeaponsFilter.styled';

const WeaponsFilter = ({ setWeaponsFilter }) => {
  const [selectedValue, setSelectedValue] = useState('All');

  const handleSelectChange = event => {
    setSelectedValue(event.target.value);
    setWeaponsFilter(event.target.value);
  };

  const onClickSelectChange = option => {
    setSelectedValue(option);
    setWeaponsFilter(option);
  };

  return (
    <div>
      <SelectInput value={selectedValue} onChange={handleSelectChange}>
        <Option value="All">All</Option>
        <Option value="Sidearm">Sidearm</Option>
        <Option value="Shotgun">Shotguns</Option>
        <Option value="Rifle">Rifles</Option>
        <Option value="SMG">SMG's</Option>
        <Option value="Heavy">Heavy</Option>
        <Option value="Sniper">Snipers</Option>
        <Option value="Melee">Melee</Option>
      </SelectInput>
      <BtnList>
        <Item $selected={selectedValue === 'All'}>
          <Btn type="button" onClick={() => onClickSelectChange('All')}>
            All
          </Btn>
        </Item>
        <Item $selected={selectedValue === 'Sidearm'}>
          <Btn type="button" onClick={() => onClickSelectChange('Sidearm')}>
            Sidearm
          </Btn>
        </Item>
        <Item $selected={selectedValue === 'Shotgun'}>
          <Btn type="button" onClick={() => onClickSelectChange('Shotgun')}>
            Shotguns
          </Btn>
        </Item>
        <Item $selected={selectedValue === 'Rifle'}>
          <Btn type="button" onClick={() => onClickSelectChange('Rifle')}>
            Rifles
          </Btn>
        </Item>
        <Item $selected={selectedValue === 'SMG'}>
          <Btn type="button" onClick={() => onClickSelectChange('SMG')}>
            SMG's
          </Btn>
        </Item>
        <Item $selected={selectedValue === 'Heavy'}>
          <Btn type="button" onClick={() => onClickSelectChange('Heavy')}>
            Heavy
          </Btn>
        </Item>
        <Item $selected={selectedValue === 'Sniper'}>
          <Btn type="button" onClick={() => onClickSelectChange('Sniper')}>
            Snipers
          </Btn>
        </Item>
        <Item $selected={selectedValue === 'Melee'}>
          <Btn type="button" onClick={() => onClickSelectChange('Melee')}>
            Melee
          </Btn>
        </Item>
      </BtnList>
    </div>
  );
};

export default WeaponsFilter;

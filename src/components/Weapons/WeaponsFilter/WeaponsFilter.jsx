import React, { useState } from 'react';
import { BtnList, SelectInput } from './WeaponsFilter.styled';

const WeaponsFilter = ({ setWeaponsFilter }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = event => {
    console.log('event.target.value', event.target.value);
    setSelectedValue(event.target.value);
    setWeaponsFilter(event.target.value);
  };

  const onClickSelectChange = option => {
    setWeaponsFilter(option);
  };

  return (
    <div>
      <SelectInput value={selectedValue} onChange={handleSelectChange}>
        <option value="Sidearm">Sidearm</option>
        <option value="Shotgun">Shotguns</option>
        <option value="Rifle">Rifles</option>
        <option value="SMG">SMG's</option>
        <option value="Heavy">Heavy</option>
        <option value="Sniper">Snipers</option>
        <option value="Melee">Melee</option>
      </SelectInput>
      <BtnList>
        <li>
          <button type="button" onClick={() => onClickSelectChange('Sidearm')}>
            Sidearm
          </button>
        </li>
        <li>
          <button type="button" onClick={() => onClickSelectChange('Shotgun')}>
            Shotguns
          </button>
        </li>
        <li>
          <button type="button" onClick={() => onClickSelectChange('Rifle')}>
            Rifles
          </button>
        </li>
        <li>
          <button type="button" onClick={() => onClickSelectChange('SMG')}>
            SMG's
          </button>
        </li>
        <li>
          <button type="button" onClick={() => onClickSelectChange('Heavy')}>
            Heavy
          </button>
        </li>
        <li>
          <button type="button" onClick={() => onClickSelectChange('Sniper')}>
            Snipers
          </button>
        </li>
        <li>
          <button type="button" onClick={() => onClickSelectChange('Melee')}>
            Melee
          </button>
        </li>
      </BtnList>
    </div>
  );
};

export default WeaponsFilter;

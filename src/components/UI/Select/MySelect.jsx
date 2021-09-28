import React from 'react';

const MySelect = ({ options, defalutValue, value, onChange }) => {
  return (
    <select onChange={(event) => onChange(event.target.value)}>
      <option disabled value="">
        {defalutValue}
      </option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;

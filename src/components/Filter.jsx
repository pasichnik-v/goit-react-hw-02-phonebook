import React from 'react';

const Filter = ({ value, onChange }) => (
  <label>
    Find contact by name
    <input
      type="text"
      value={value}
      onChange={onChange}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    />
  </label>
);

export default Filter;

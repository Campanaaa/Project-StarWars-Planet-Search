import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Filter() {
  const { filterByName, setFilter } = useContext(MyContext);
  const { name } = filterByName;

  function handleChange({ target }) {
    const { value } = target;
    setFilter((prevState) => ({
      ...prevState,
      name: value,
    }));
  }

  return (
    <input
      type="text"
      data-testid="name-filter"
      value={ name }
      onChange={ handleChange }
    />
  );
}

export default Filter;

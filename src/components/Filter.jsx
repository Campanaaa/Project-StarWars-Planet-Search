import React, { useContext, useState } from 'react';
import MyContext from '../context/MyContext';

function Filter() {
  const {
    filterByName,
    setFilterByName,
    setFilterByNumericValues } = useContext(MyContext);

  const { name } = filterByName;
  const [teporaryFilter, setTemporaryFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const [dropDownColumn, setDropDownColumn] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);

  const dropDownComparsion = [
    'maior que',
    'menor que',
    'igual a',
  ];

  function handleChange({ target }) {
    const { value } = target;
    setFilterByName((prevState) => ({
      ...prevState,
      name: value,
    }));
  }

  function handleNumericChange({ target }) {
    const { value } = target;
    setTemporaryFilter((prevState) => ({
      ...prevState,
      [target.name]: value,
    }));
  }

  function handleFilter() {
    const { column } = teporaryFilter;
    const indexOfTheRemoval = dropDownColumn.indexOf(column);
    setDropDownColumn(dropDownColumn.filter((e, index) => index !== indexOfTheRemoval));
    setFilterByNumericValues((prevState) => (
      [...prevState, teporaryFilter]
    ));
  }

  return (
    <>
      <label htmlFor="name">
        Planet Name:
        <input
          type="text"
          data-testid="name-filter"
          value={ name }
          id="name"
          onChange={ handleChange }
        />
      </label>
      <form>
        <label htmlFor="column">
          Column:
          <select
            data-testid="column-filter"
            id="column"
            name="column"
            onChange={ handleNumericChange }
            value={ teporaryFilter.column }
          >
            {dropDownColumn.map((item) => (
              <option key={ item }>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="operator">
          Operator:
          <select
            name="comparison"
            data-testid="comparison-filter"
            id="operetor"
            onChange={ handleNumericChange }
            value={ teporaryFilter.comparison }
          >
            {dropDownComparsion.map((operator) => (
              <option key={ operator }>
                {operator}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="number">
          Number:
          <input
            type="number"
            data-testid="value-filter"
            id="number"
            name="value"
            onChange={ handleNumericChange }
            value={ teporaryFilter.value }
          />
        </label>
        <button type="button" data-testid="button-filter" onClick={ handleFilter }>
          Filter
        </button>
      </form>
    </>

  );
}

export default Filter;

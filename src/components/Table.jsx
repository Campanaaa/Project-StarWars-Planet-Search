import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Table() {
  const { data, filterByName, filterByNumericValues } = useContext(MyContext);
  const tableColumns = [
    'Name',
    'Rotation Period',
    'Orbital Period',
    'Diameter',
    'Climate',
    'Gravity',
    'Terrain',
    'Surface Water',
    'Population',
    'Films',
    'Created',
    'Edited',
    'Url',
  ];

  function filterNumericValues(items) {
    const filteredItems = [];
    if (filterByNumericValues[0]) {
      const { column, comparison, value } = filterByNumericValues[0];
      switch (comparison) {
      case 'maior que': {
        items.forEach((item) => {
          if (parseInt(item[column], 10) > parseInt(value, 10)) {
            filteredItems.push(item);
          }
        });
        return filteredItems;
      }
      case 'igual a': {
        items.forEach((item) => {
          if (item[column] === value) {
            filteredItems.push(item);
          }
        });
        return filteredItems;
      }
      case 'menor que': {
        items.forEach((item) => {
          if (parseInt(item[column], 10) < parseInt(value, 10)) {
            filteredItems.push(item);
          }
        });
        return filteredItems;
      }
      default:
        return items;
      }
    }
    return items;
  }

  return (
    <table>
      <thead>
        <tr>
          { tableColumns.map((item) => (
            <th key={ item }>
              { item }
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        { filterNumericValues(
          data.filter((e) => e.name.includes(filterByName.name)),
        ).map((planet) => (
          <tr key={ planet.name }>
            <td>{ planet.name }</td>
            <td>{ planet.rotation_period }</td>
            <td>{ planet.orbital_period }</td>
            <td>{ planet.diameter }</td>
            <td>{ planet.climate }</td>
            <td>{ planet.gravity }</td>
            <td>{ planet.terrain }</td>
            <td>{ planet.surface_water }</td>
            <td>{ planet.population }</td>
            <td>
              { planet.films.map((film) => (
                <p key={ film }>{ film }</p>
              ))}
            </td>
            <td>{ planet.created }</td>
            <td>{ planet.edited }</td>
            <td>{ planet.url }</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;

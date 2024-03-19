import React from 'react';
import PropTypes from 'prop-types';

export const Buscador = ({ data, setFilter }) => {
  const handleOnChange = (event) => {
    const { value } = event.target;
    const valueToLowerCase = value.toLowerCase();

    const dataFiltered = data.filter((user) => {

      return (
        user.nombre.toLowerCase().includes(valueToLowerCase) ||
        user.correo.toLowerCase().includes(valueToLowerCase) ||
        user.telefono.toLowerCase().includes(valueToLowerCase) ||
        user.edad.toLowerCase().includes(valueToLowerCase) ||
        user.cargo.toLowerCase().includes(valueToLowerCase)
      );
    });

    setFilter(dataFiltered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar colaborador..."
        onChange={handleOnChange}
      />
    </div>
  );
};

Buscador.propTypes = {
  data: PropTypes.array.isRequired,
  setFilter: PropTypes.func.isRequired,
};





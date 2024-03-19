import React from 'react';
import PropTypes from 'prop-types';


export const Listado = ({data, eliminardata}) => {
    const handleEliminarData = (index) => {
        eliminardata(index)
    }
  return (

<div className="table-responsive">
      <table className="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Edad</th>
                    <th>Cargo</th>
                    <th>Telefono</th>
                </tr>
            </thead>
            <tbody>{data.length ? (
                data.map((user, index) => (
                    <tr key={index+1}>
                        <td>{index+1}</td>
                        <td>{user.nombre}</td>
                        <td>{user.correo}</td>
                        <td>{user.edad}</td>
                        <td>{user.cargo}</td>
                        <td>{user.telefono}</td>
                        <td><button
                        className='btn btn-outline-danger btn-sm'
                        onClick={() => handleEliminarData(index)}>
                        Eliminar  
                        </button>
                        </td>
                    </tr>
                    ))

             ) : (
                   <td colSpan={6}>
                    <h1>Colaborador No Encontrado😥</h1>

                   </td>
                    )}
            </tbody>
        </table>
</div>
    
  );
};

Listado.propTypes = {
    data: PropTypes.array.isRequired,
};


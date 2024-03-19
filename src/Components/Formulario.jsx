import React, { useState } from 'react';
import Alert from './Alert'

const Formulario = ({ agregaColaborador, setAlert }) => {
  const [DataColab, setDataColab] = useState({
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: '',
  });

  const enviarFormulario = (e) => {
    e.preventDefault();
    if (!DataColab.nombre || !DataColab.correo || !DataColab.edad || !DataColab.cargo || !DataColab.telefono) {
      setAlert({ mensaje: 'Todos los campos son Obligatorios', type: 'danger' });
      setTimeout(() => {
        setAlert({ mensaje: '', type: '' });
      }, 2000);
      return;
    }
    const edad = parseInt(DataColab.edad);
        if (edad < 18 || edad > 65) {
          setAlert({mensaje:'La edad debe estar entre 18 y 65 años', type:'danger'});
          return;
        }   
    
        const telefonoFormat = /^\d{9}$/;
        if (!telefonoFormat.test(DataColab.telefono)) {
          setAlert({mensaje:'El teléfono debe tener 9 dígitos', type:'danger'});
          return;  
        }

    const nuevoColaborador = {
      id: Date.now().toString(),
      ...DataColab,
    };

    agregaColaborador(nuevoColaborador);
    setDataColab({
      nombre: '',
      correo: '',
      edad: '',
      cargo: '',
      telefono: '',
    });

    setAlert({ mensaje: 'Colaborador agregado exitosamente', type: 'success' });
    setTimeout(() => {
      setAlert({ mensaje: '', type: '' });
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataColab({ ...DataColab, [name]: value });
  };

  return (
    <>
      <form onSubmit={enviarFormulario} className='container'>
        <div className='form-group mb-3'>
          <input
            type='text'
            name='nombre'
            placeholder='Nombre del colaborador'
            className='form-control'
            onChange={handleChange}
            value={DataColab.nombre}
          />
        </div>
        <div className='form-group mb-3'>
          <input
            type='email'
            name='correo'
            placeholder='Email del colaborador'
            className='form-control'
            onChange={handleChange}
            value={DataColab.correo}
          />
        </div>
        <div className='form-group mb-3'>
          <input
            type='number'
            name='edad'
            placeholder='Edad del colaborador'
            className='form-control'
            onChange={handleChange}
            value={DataColab.edad}
          />
        </div>
        <div className='form-group mb-3'>
          <input
            type='text'
            name='cargo'
            placeholder='Cargo de colaborador'
            className='form-control'
            onChange={handleChange}
            value={DataColab.cargo}
          />
        </div>
        <div className='form-group mb-3'>
          <input
            type='tel'
            name='telefono'
            placeholder='Telefono del Colaborador'
            className='form-control'
            onChange={handleChange}
            value={DataColab.telefono}
          />
        </div>
        <button  type='submit' className='btn btn-primary'>Agregar colaborador</button>
      </form>
    </>
  );
};

export default Formulario;
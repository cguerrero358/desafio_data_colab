import { useState } from 'react'
import './App.css'
import React from 'react';
import {BaseColaboradores} from './BaseColaboradores.js';
import { Buscador } from './Components/Buscador';
import { Listado } from './Components/Listado.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from './Components/Alert.jsx';
import Formulario from './Components/Formulario.jsx'


function App() {
  const [filter,setFilter] = useState([]);
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alert, setAlert] = useState({ mensaje:'', type: ''})
  
  const agregaColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador])
    setAlert({mensaje:'Colaborador agregado exitosamente', type:'success'})
    setTimeout(() => {
      setAlert({mensaje:'mensaje', type:''})
    }, 2000)
  }

  const eliminarColaborador = (index) => {
    const nuevaLista = colaboradores.filter((colaborador, i) => i !== index)
    setColaboradores(nuevaLista)
    setAlert({mensaje:'Colaborador eliminado exitosamente', type:'warning'})
    setTimeout(() => {
      setAlert({mensaje:'', type:''})
    }, 2000)
  }
  return (
    <>
    <div className='ContainerBuscador'>
      <h1>
        Lista de colaboradores
      </h1>
      <Buscador 
      data={BaseColaboradores}
      setFilter={setFilter}
           />
    <Listado data={colaboradores} eliminarColaborador={eliminarColaborador}/>
    </div>
     
    
    <div>
      <div className='mt-3'>
      {alert.mensaje && <Alert mensaje={alert.mensaje} type={alert.type} />}
      </div>
    <div>
      <h3>Agregar Colaborador</h3>
      <Formulario 
      agregaColaborador={agregaColaborador} 
      setAlert={setAlert} />
    </div>
     
     </div>
    </>
  );
}

export default App;
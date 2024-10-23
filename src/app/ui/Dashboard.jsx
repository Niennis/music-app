'use client'
import { useEffect, useState } from "react";

import SearchBar from "./SearchBar";
import UserNameInput from "./UserNameInput";
import DataTable from "./Table";

const Dashboard = () => {
  const [data, setData] = useState()
  const [inputValue, setInputValue] = useState('');
  const [userName, setUserName] = useState('')
  const [bandName, setBandName] = useState('')

  const apiCall = async (name) => {
    setBandName(name)
    const response = await fetch(`https://musicappback-production.up.railway.app/search_tracks?name=${name}`)
    const { data: respuesta } = await response.json()

    const mapResponse = respuesta.canciones.map(item => ({
      ...item,
      id: item.cancion_id,
      precio: item.precio.valor,
      moneda: item.precio.moneda
    }))
    setData(mapResponse)
  }

  const handleInputChange = value => {
    setInputValue(value);
  };

  const handleKwyDown = event => {
    if (event.key === 'Enter') {
      apiCall(inputValue)
    }
  }

  const handleUserName = value => {
    setUserName(value)
  }

  const handleClick = async (cellValues) => {
    if (!userName) return;

    const body = {
      "nombre_banda": bandName,
      "cancion_id": cellValues.id,
      "usuario": userName,
      "ranking": "5/5"
    }
    console.log('BODY', body)

    try {
      const response = await fetch('https://musicappback-production.up.railway.app/favoritos', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('RESPUESTA', data)
        // setInfo(prevInfo => ({
        //   ...prevInfo,
        //   buttonValue: data.updatedValue,
        // }));
      } else {
        console.error('Error al actualizar el valor del botón.');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };




  return (
    <>
      <h2 className="text-4xl font-black text-center drop-shadow-[0_2px_2px_rgba(10,100,100,0.5)] self-center " >Busca tu artista favorito</h2>
      <SearchBar handleKwyDown={handleKwyDown} onInputChange={handleInputChange} />
      <UserNameInput onInputChange={handleUserName} />
      {data && <DataTable tracks={data} handleClick={handleClick} />}
      {/* {data && <DataTable tracks={data} />} */}
    </>
  )

}

export default Dashboard;
import React, { useState } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {

  const [busqueda, setBusqueda] = useState('');
  const [noEncontrado, setNoEncontrado] = useState(false);

  const buscarMovie = (e) => {
      // Crear estado y actualizarlo
      setBusqueda(e.target.value);

      // Filtrar para buscar coincidencias
      let movies_encontradas = listadoState.filter(movie => {
        return movie.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
      });

      if (busqueda.length <= 1 || movies_encontradas <= 0) {
          movies_encontradas = JSON.parse(localStorage.getItem("movies"));
          setNoEncontrado(true);
      
      } else {
          setNoEncontrado(false);
      }
      
      // Actualizar estado del listado principal con lo que he logrado filtrar
      setListadoState(movies_encontradas);
  }

  return (
    <div className="search">
        <h3 className="title">Buscador: {busqueda}</h3>

        {(noEncontrado == true && busqueda.length > 3) && (
          <span className='no-encontrado'>No se ha encontrado ninguna coincidencia</span>
        )}

        <form>
            <input type="text"
                   id='search_field' 
                   name='busqueda'
                   autoComplete='off'
                   value={ busqueda }
                   onChange={ buscarMovie }
            />
                
            <button id='search'>Buscar</button>
        </form>
    </div>
  )
}

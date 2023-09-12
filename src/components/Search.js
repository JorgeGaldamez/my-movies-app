import React, { useState } from 'react'

export const Search = ({listState, setListState}) => {

  const [searching, setSearching] = useState('');
  const [notFound, setNotFound] = useState(false);

  const searchMovie = (e) => {
      // Crear estado y actualizarlo
      setSearching(e.target.value);

      // Filtrar para buscar coincidencias
      let found_movies = listState.filter(movie => {
        return movie.titulo.toLowerCase().includes(searching.toLocaleLowerCase());
      });

      if (searching.length <= 1 || found_movies <= 0) {
          found_movies = JSON.parse(localStorage.getItem("movies"));
          setNotFound(true);
      
      } else {
          setNotFound(false);
      }
      
      // Actualizar estado del listado principal con lo que he logrado filtrar
      setListState(found_movies);
  }

  return (
    <div className="search">
        <h3 className="title">Buscar: {searching}</h3>

        {(notFound === true && searching.length > 3) && (
          <span className='not-found'>No se ha encontrado ninguna coincidencia</span>
        )}

        <form>
            <input type="text"
                   id='search_field' 
                   name='searching'
                   autoComplete='off'
                   value={ searching }
                   onChange={ searchMovie }
            />
                
            <button id='search'>Buscar</button>
        </form>
    </div>
  )
}

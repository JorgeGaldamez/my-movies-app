import React, { useEffect, useState } from 'react'
import { Edit } from './Edit';

export const List = ({listState, setListState}) => {

    //const [listState, setListState ] = useState([]);

    const [edit, setEdit] = useState(0);
    
    
    const getMovies = () => {
      let movies = JSON.parse(localStorage.getItem("movies"));
      
      setListState(movies);
      
      return movies;
    }
    
    useEffect(() => {
        console.log("List of movies loaded!");
        getMovies();
    }, []);
    
    const deleteMovie = (id) => {
        // Conseguir peliculas almacenadas
        let stored_movies = getMovies();

        // Filtrar esas movies para que elimine del array la que no quiero
        let new_movie_list = stored_movies.filter(movie => movie.id !== parseInt(id))

        // Actualizar estado del List
        setListState(new_movie_list);

        // Actualizar los datos en el localStorage
        localStorage.setItem('movies', JSON.stringify(new_movie_list));
    }

  return (
    <>
      {listState != null ?
              listState.map(movie => {

                return (
                  <article key={movie.id} className="movie-item">
                          <h3 className="title">{movie.title}</h3>
                          <p className="description">{movie.description}</p>

                          <button className="edit" onClick={ () => setEdit(movie.id) }>Editar</button>
                          <button className="delete" onClick={ () => deleteMovie(movie.id) }>Borrar</button>

                          {/* Aparece formulario de edit */}
                          {edit === movie.id && (

                            <Edit movie={movie} 
                                    getMovies={getMovies}
                                    setEdit={setEdit}
                                    setListState={setListState}
                            />
                            
                          )}  
                  </article>
                );

              })
        :  <h2>No hay movies para mostrar</h2>    
      }

    </>
  )
}

            

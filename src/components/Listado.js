import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({listadoState, setListadoState}) => {

    //const [listadoState, setListadoState ] = useState([]);

    const [editar, setEditar] = useState(0);
    
    
    const conseguirPeliculas = () => {
      let peliculas = JSON.parse(localStorage.getItem("movies"));
      
      setListadoState(peliculas);
      
      return peliculas;
    }
    
    useEffect(() => {
        console.log("listado de peliculas cargado!");
        conseguirPeliculas();
    }, []);
    
    const borrarMovie = (id) => {
        // Conseguir peliculas almacenadas
        let movies_almacenadas = conseguirPeliculas();

        // Filtrar esas peliculas para que elimine del array la que no quiero
        let nuevo_listado_peliculas = movies_almacenadas.filter(movie => movie.id !== parseInt(id))

        // Actualizar estado del listado
        setListadoState(nuevo_listado_peliculas);

        // Actualizar los datos en el localStorage
        localStorage.setItem('movies', JSON.stringify(nuevo_listado_peliculas));
    }

  return (
    <>
      {listadoState != null ?
              listadoState.map(movie => {

                return (
                  <article key={movie.id} className="movie-item">
                          <h3 className="title">{movie.titulo}</h3>
                          <p className="description">{movie.descripcion}</p>

                          <button className="edit" onClick={ () => setEditar(movie.id) }>Editar</button>
                          <button className="delete" onClick={ () => borrarMovie(movie.id) }>Borrar</button>

                          {/* Aparece formulario de editar */}
                          {editar === movie.id && (

                            <Editar movie={movie} 
                                    conseguirPeliculas={conseguirPeliculas}
                                    setEditar={setEditar}
                                    setListadoState={setListadoState}
                            />
                            
                          )}  
                  </article>
                );

              })
        :  <h2>No hay peliculas para mostrar</h2>    
      }

    </>
  )
}

            

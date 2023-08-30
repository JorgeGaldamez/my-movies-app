import React from 'react'

export const Editar = ({movie, conseguirPeliculas, setEditar, setListadoState}) => {
    const titulo_componente = "Editar pelicula";

    const guardarEdicion = (e, id) => {
        e.preventDefault();

        // Conseguir target del evento
        let target = e.target;

        // Buscar el indice del objeto de la pelicula a actualizar
        const movies_almacenadas = conseguirPeliculas();
        const indice = movies_almacenadas.findIndex(movie => movie.id === id);

        // Crear objeto con el id de ese indice, con titulo y descripcion del formulario
        let movie_actualizada = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value
        };

        // Actualizar el elemento con ese indice
        movies_almacenadas[indice] = movie_actualizada;

        // Guardar el nuevo array de objetos en el LocalStorage
        localStorage.setItem("movies", JSON.stringify(movies_almacenadas));

        // Actualizar estados
        setListadoState(movies_almacenadas);
        setEditar(0);

    }
    
  return (
    <div className='edit_form'>
        <h3 className='title'>{titulo_componente}</h3>
        <form onSubmit={ e => guardarEdicion(e, movie.id) }>
            <input type='text'
                   name='titulo'
                   className='titulo_editado'
                   defaultValue={movie.titulo} />
            
            <textarea name='descripcion'
                      defaultValue={movie.descripcion}
                      className='descripcion_editada' />

            <input type='submit' className='editar' value='Actualizar' />
        </form>
    </div>
  )
}

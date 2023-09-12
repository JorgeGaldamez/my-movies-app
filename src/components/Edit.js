import React from 'react'

export const Edit = ({movie, getMovies, setEdit, setListState}) => {
    const component_title = "Editar pelicula";

    const saveEdit = (e, id) => {
        e.preventDefault();

        // Conseguir target del evento
        let target = e.target;

        // Buscar el index del objeto de la pelicula a actualizar
        const stored_movies = getMovies();
        const index = stored_movies.findIndex(movie => movie.id === id);

        // Crear objeto con el id de ese index, con title y description del formulario
        let updated_movie = {
            id,
            title: target.title.value,
            description: target.description.value
        };

        // Actualizar el elemento con ese index
        stored_movies[index] = updated_movie;

        // Guardar el nuevo array de objetos en el LocalStorage
        localStorage.setItem("movies", JSON.stringify(stored_movies));

        // Actualizar estados
        setListState(stored_movies);
        setEdit(0);

    }
    
  return (
    <div className='edit_form'>
        <h3 className='title'>{component_title}</h3>
        <form onSubmit={ e => saveEdit(e, movie.id) }>
            <input type='text'
                   name='title'
                   className='title_edited'
                   defaultValue={movie.title} />
            
            <textarea name='description'
                      defaultValue={movie.description}
                      className='description_edited' />

            <input type='submit' className='edit' value='Actualizar' />
        </form>
    </div>
  )
}

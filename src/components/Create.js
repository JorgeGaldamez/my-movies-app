import React, { useState } from 'react'
import { saveInStorage } from '../helpers/saveInStorage';

export const Create = ({setListState}) => {

    const componentTitle= "Agregar pelicula";

    const [ movieState, setMovieState ] = useState({
        title: '',
        description: ''
    });

    const { title, description } = movieState;

    const getFormData = e => {
        e.preventDefault();

        // Conseguir datos del formulario
        let target = e.target;
        let title = target.title.value;
        let description = target.description.value;

        // Create objeto de la pelicula que guardaremos
        let movie = {
            id: new Date().getTime(),
            title,
            description
        };
        
        // Guardar estado
        setMovieState(movie);

        // Actualizar el estado del listado principal
        setListState(elements => {
            return [...elements, movie];
        });

        // Guardar en el almacenamiento local
        saveInStorage("movies", movie);
        
    }
    
    

  return (
    <div className="add">
        <h3 className="title">{componentTitle}</h3>

        <strong>
            {(title && description) && "Has agregado la pelicula: " + title}
        </strong>

        <form onSubmit={ getFormData }>
            <input type="text"
                   id="title"
                   name='title' 
                   placeholder="title" />

            <textarea 
                    id='description'
                    name='description' 
                    placeholder="Descripción"></textarea>

            <input type="submit"
                   id='save' 
                   value="Guardar" /> 
        </form>

    </div>
  )
}

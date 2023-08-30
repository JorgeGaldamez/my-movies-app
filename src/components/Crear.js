import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({setListadoState}) => {

    const tituloComponente= "Agregar pelicula";

    const [ movieState, setMovieState ] = useState({
        titulo: '',
        descripcion: ''
    });

    const { titulo, descripcion } = movieState;

    const conseguirDatosForm = e => {
        e.preventDefault();

        // Conseguir datos del formulario
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        // Crear objeto de la pelicula que guardaremos
        let movie = {
            id: new Date().getTime(),
            titulo,
            descripcion
        };
        
        // Guardar estado
        setMovieState(movie);

        // Actualizar el estado del listado principal
        setListadoState(elementos => {
            return [...elementos, movie];
        });

        // Guardar en el almacenamiento local
        GuardarEnStorage("movies", movie);
        
    }
    
    

  return (
    <div className="add">
        <h3 className="title">{tituloComponente}</h3>

        <strong>
            {(titulo && descripcion) && "Has agregado la pelicula: " + titulo}
        </strong>

        <form onSubmit={ conseguirDatosForm }>
            <input type="text"
                   id="titulo"
                   name='titulo' 
                   placeholder="Titulo" />

            <textarea 
                    id='descripcion'
                    name='descripcion' 
                    placeholder="Descripción"></textarea>

            <input type="submit"
                   id='save' 
                   value="Guardar" /> 
        </form>

    </div>
  )
}

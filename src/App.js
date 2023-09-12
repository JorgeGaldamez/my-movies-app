import { useState } from "react";
import { Search } from "./components/Search";
import { Create } from "./components/Create";
import { List } from "./components/List";


function App() {

    const [listState, setListState ] = useState([]);

  return (
        <div className="layout">
        {/*Cabecera*/}
        <header className="header">
            
            <div className="logo">
                <div className="play"></div>
            </div>

            <h1>MyMovies</h1>

        </header>

        {/*Barra de navegación*/}
        <nav className="nav">
            <ul>
                <li><a href="/#">Inicio</a></li>
                <li><a href="/#">Peliculas</a></li>
                <li><a href="/#">Blog</a></li>
                <li><a href="/#">Contacto</a></li>
            </ul>
        </nav>

        {/*Contenido principal*/}
        <section className="content">

            {/*aqui va el listado de peliculas*/}
            <List listState={listState} setListState={setListState} />

        </section>

        {/*Barra lateral*/}
        <aside className="lateral">
            <Search listState={listState} setListState={setListState} />

            <Create setListState={setListState} />
        </aside>

        {/*Pie de página*/}
        <footer className="footer">
            &copy; Máster en React JS - <a href="#">JorgeGaldamez</a>
        </footer>
        
    </div>
  );
}

export default App;

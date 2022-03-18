import React, {useState, useEffect} from 'react';
import Cabecera from './components/Cabecera';
import Paginacion from './components/Paginacion';
import Personaje from './components/Personaje';




function App() {

  const [personajes, setpersonajes] = useState([]);
  const [info, setinfo] = useState({});
  
  

  let urlPrimaria = "https://rickandmortyapi.com/api/character"

  let fetchPersonajes = (url) => {
    fetch(url)
    .then(res => res.json())
      .then(data => {
        setpersonajes(data.results);
        setinfo(data.info);
      })
  }

  const irAnterior = () => {
    fetchPersonajes(info.prev);
  }

  const irSiguiente = () => {
    fetchPersonajes(info.next)
  }



  useEffect(() => {
    fetchPersonajes(urlPrimaria);
  }, []);

  return (
    <div className="container mt-3">
      
      <Cabecera titulo="Rick and Morty" />
      <Paginacion
        anterior={info.prev}
        siguiente={info.next}
        irAnterior={irAnterior}
        irSiguiente={irSiguiente}
      />
      <Personaje personajes={personajes} /> 
      <Paginacion
        anterior={info.prev}
        siguiente={info.next}
        irAnterior={irAnterior}
        irSiguiente={irSiguiente}
      />
      
    </div>
  );
}

export default App;

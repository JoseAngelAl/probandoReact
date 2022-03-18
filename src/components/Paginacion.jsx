import React from "react";

const Paginacion = ({anterior, siguiente, irAnterior, irSiguiente}) => {

    const manejadorAnterior = () => {
        irAnterior();
    }

    const manejadorSiguiente = () => {
        irSiguiente();
    }


    return (
        <nav className="mt-4">
            <ul className="pagination justify-content-center">
                {
                    anterior ?
                        <li className="page-item mx-1">
                            <a className="btn btn-dark" onClick={manejadorAnterior}>Anterior</a>
                        </li>
                        :                        
                        null
                }
                {
                    siguiente ?
                        <li className="page-item mx-1">
                            <a className="btn btn-dark" onClick={manejadorSiguiente}>Siguiente</a>
                        </li>
                        :
                        null
                } 
            </ul>
        </nav>
    )
    
};

export default Paginacion;

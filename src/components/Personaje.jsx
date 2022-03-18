import React, { Fragment } from "react";

function Personaje({personajes=[]}) {
    return (
        <Fragment>
            <div className="row mt-3">
                
                {
                    personajes.map((item, index) => 
                        
                        <div key={index} className="col mb-4" style={{ minWidth: "300px" }}>
                            <div className="card">
                                <img src={item.image} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text"><strong>Especie: </strong>{item.species}</p>
                                    <p className="card-text"><strong>Descripción: </strong>{item.type}</p>
                                    <a href={item.image} className="btn btn-dark"  target="blank">Ver Imagen</a>
                                </div>
                            </div>
                        </div>               
                    
                    )
                }

             
        </div>
        </Fragment>
    );
}

export default Personaje;


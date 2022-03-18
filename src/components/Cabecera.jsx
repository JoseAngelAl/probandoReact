import React, { Fragment } from "react";

function Cabecera({titulo}) {
    
    return (
        <Fragment>
            <div >
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">{titulo}</a>
                    </div>
                </nav>
            </div>
        </Fragment>
    );
}

export default Cabecera;
 
 
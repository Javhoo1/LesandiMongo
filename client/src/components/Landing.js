import React from 'react';

export default function Home(){
    return(
        <body className="bodyHome">
            <div className="divHome">
            <div >
                <h1 className="h1Home">BIENVENIDOS A LESANDI</h1>;
                <h3 className="h3Home">Aprender nunca ha sido tan divertido</h3>;
                    <a href="Login" class="btn btn-outline-info btn-lg" role="button" aria-pressed="true">INICIAR SESIÓN</a>
                    <a href="Register" class="btn btn-outline-success btn-lg" role="button" aria-pressed="true">REGISTRARSE</a>
                </div>
            </div>
        </body>
        
    );
}
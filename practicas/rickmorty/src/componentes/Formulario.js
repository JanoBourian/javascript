import React from 'react';
//import {traerDatos} from '../traerDatos';

const Formulario = ({totalPerfiles, traerTotal}) =>{
    async function totalDatos(){
        let response = await fetch(`https://rickandmortyapi.com/api/character/`);
        let data = await response.json();
        console.log(data);
        console.log(data.length)
        return data.length;
    };
    totalDatos().then(data=>traerTotal(data));
    return(
        <form>
            <input type="text" name="nombre" id="nombre" className="form-control py-4" placeholder="Ingresa tu nombre:"/>
            <input type="email" name="correo" id="correo" className="form-control py-4" placeholder="Ingresa tu correo:"/>
            <button type="submit" className="btn btn-success">Enviar</button>
        </form>
    );
}

export default Formulario;

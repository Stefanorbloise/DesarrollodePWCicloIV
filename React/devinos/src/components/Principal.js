import React from 'react'
import '../styles/Principal.css'
import Usuarios from '../pages/usuarios/Usuarios'
import Proyectos from './Proyectos'

function Principal(props) {
    switch (props.component) {
        case "1":
            return (
                <div id="SP">
                    <Proyectos/>
                </div>
            );
        case "2":
            return (
                <div id="SP">
                    <Usuarios/>
                </div>
            );
        default:
            return (<></>);
    }
}
export default Principal;

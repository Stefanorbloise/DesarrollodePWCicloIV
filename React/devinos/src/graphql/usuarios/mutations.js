import {gql} from '@apollo/client'


const EDITAR_USUARIO = gql`
mutation ActualizarUsuarios($_id: ID!, 
$correo: String!, 
$identificacion: String!, 
$nombre: String!, 
$estado: String!
) {
  actualizarUsuarios(_id: $_id, 
  correo: $correo, 
  identificacion: $identificacion, 
  nombre: $nombre, 
  estado: $estado) {
    _id
    correo
    identificacion
    nombre
    estado
  }
}
`;

export {EDITAR_USUARIO};
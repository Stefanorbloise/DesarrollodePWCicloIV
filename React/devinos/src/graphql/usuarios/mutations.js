import {gql} from '@apollo/client'


const EDITAR_USUARIO = gql`
mutation ActualizarUsuarios($_id: ID!, 
$correo: String!, 
$identificacion: String!, 
$nombre: String!, 
$estado: String!,
$rol: String!,
$contrasena: String!
) {
  actualizarUsuarios(_id: $_id, 
  correo: $correo, 
  identificacion: $identificacion, 
  nombre: $nombre, 
  estado: $estado,
  rol: $rol,
  contrasena: $contrasena) {
    _id
    correo
    identificacion
    nombre
    estado
    rol
    contrasena
  }
}
`;

const EDITAR_USUARIO_ESTADO = gql`
mutation ActualizarUsuariosEstado($_id: ID!, 
$estado: String!
) {
  actualizarUsuariosEstado(_id: $_id,
  estado: $estado) {
    _id
    estado
  }
}
`;

export {EDITAR_USUARIO, EDITAR_USUARIO_ESTADO};
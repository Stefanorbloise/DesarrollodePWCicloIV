import { gql } from '@apollo/client';

const GET_USUARIOS = gql`
query Usuarios {
  usuarios {
    _id
    correo
    identificacion
    rol
    nombre
    estado
    contrasena
  }
}
`;

const GET_USUARIO = gql`
query BuscarUsuarios($_id: ID!) {
  buscarUsuarios(_id: $_id) {
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

const GET_USUARIOS_ROL = gql`
query UsuariosByRol($rol: String!) {
  usuariosByRol(rol: $rol) {
    _id
    correo
    identificacion
    rol
    nombre
    estado
    contrasena
  }
}
`;

export {GET_USUARIOS, GET_USUARIO, GET_USUARIOS_ROL};

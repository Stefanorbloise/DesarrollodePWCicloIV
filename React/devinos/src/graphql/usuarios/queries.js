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
  }
}
`;

export {GET_USUARIOS, GET_USUARIO};

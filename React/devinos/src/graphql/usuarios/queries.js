import { gql } from '@apollo/client';

const GET_USUARIOS = gql`
query Usuarios {
  usuarios {
    _id
    correo
    contrasena
    identificacion
    nombre
    rol
    estado
  }
}
`;

export {GET_USUARIOS};

// HACERMOS LOS SCHEMAS

import { gql } from "apollo-server-express";

// Enum_Rol {
// ESTUDIANTE
// LIDER
// ADMINISTRADOR
// }

// Enum_Estado {
// PENDIENTE
// AUTORIZADO
// NO_AUTORIZADO
// }

//scalar Date

const typeDefs = gql`
  type Usuario {
    _id: ID!
    nombre: String!
    apellido: String!
    identificacion: String!
    correo: String!
    estado: String
    rol: String!
  }

  type objetivo {
    descripcion: String!
    tipo: String!
  }

  type Proyecto {
    _id: ID!
    nombre: String!
    presupuesto: Float!
    fechaInicio: String!
    fechaFin: String!
    estado: String!
    fase: String!
    lider: String!
    objetivos: [objetivo]
  }

  type Query {
    Usuarios: [Usuario]
    Usuario(_id: String): Usuario
    Proyectos: [Proyecto]
  }

  type Mutation {
    crearUsuario(
      nombre: String!
      apellido: String!
      identificacion: String!
      correo: String!
      estado: String
      rol: String!
    ): Usuario

    editarUsuario(
      _id: String!
      nombre: String!
      apellido: String!
      identificacion: String!
      correo: String!
      estado: String
      rol: String!
    ): Usuario

    eliminarUsuario(_id: String, correo: String): Usuario

    crearProyecto(
      nombre: String!
      presupuesto: Float!
      fechaInicio: String!
      fechaFin: String!
      estado: String
      fase: String
      lider:String
     
    ): Proyecto
  }
`;

export { typeDefs };

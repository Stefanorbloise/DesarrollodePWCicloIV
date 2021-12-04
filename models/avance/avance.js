import { ProyectModel } from "../proyecto/proyecto";
import { UserModel } from "../usuarios/usuarios";
import mongoose from "mongoose";

const { Schema, model } = mongoose; /*esto se llama deconstrucción*/

const avanceSchema = new Schema({
  fecha: {
    type: Date,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  observaciones: {
    type: String,
  },
  proyecto: {
    type: ,
    ref: ,
    required: true,
  },
  creadoPor: {
    type: ,
    ref: ,
    required: true,
  },
});

 const avanceModel = model('avance', avanceSchema, 'Avances');

 export {avanceModel};
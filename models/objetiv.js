import mongoose from "mongoose";
import { ProyectModel } from "./proyecto/proyecto.js";

const { Schema, model } = mongoose;

const objetivSchema = new Schema({

    descripcion: {
        type: String,
        require: true,
    },
    tipo: {
        type: String,
        enum: ['General', 'Específico'],
        require: true,
    },

    proyecto: {
        type: String,
        ref: ProyectModel,
    },



});

const ObjetivModel = model('objetivo', objetivSchema);

export {ObjetivModel};
import mongoose from "mongoose";
//import { ObjetivModel } from "../objetiv.js";
import { UserModel } from "../usuarios/usuarios.js";

const { Schema, model } = mongoose;


const proyectoSchema = new Schema({ 
    nombre: {
        type: String,
        required: true,
        unique: true,
    },
    presupuesto: {
        type: Number,
        required: true,
    },
    fechaInicio: {
        type: Date,
        required: true,
    },
    fechaFin: {
        type: Date,
        required: true,
    },
    estadoProyecto: {
        type: String,
        enum: ['ACTIVO', 'INACTIVO'],
        default: 'INACTIVO',
    },
    faseProyecto: {
        type: String,
        enum: ['INICIADO', 'EN DESARROLLO', 'TERMINADO', 'NULO'],
        default: 'NULO',
    },
     
      lider: {
          type: Schema.Types.ObjectId,
          require: true,
          ref: UserModel, /*aquí hago una referencia fuerte*/
    },

    
//},
    // inscipciones: {
    //     type: Array,
    //     required: true,
    // },
    // avances: {
    //     type: Array,
    //     required: true,
    // },

});

const ProyectModel = model("proyecto", proyectoSchema);

export {ProyectModel};
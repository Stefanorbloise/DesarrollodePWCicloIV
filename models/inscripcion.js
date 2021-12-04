import mongoose from "mongoose";

const { Schema, model } = mongoose;

const inscripcionSchema = new Schema({
  estado: {
    type: String,
    enum: ["ACEPTADO", "RECHAZADO", "PENDIENTE"],
    required: true,
    default: 'PENDIENTE',
  },
  fechaIngreso: {
      type: Date,
      required: true,
  },
  fechaFin: {
    type: Date,
    required: true,
  },
  proyecto: {
    type: String,
    required: true,

  }

});

const inscripcionModel = model("Inscripciones",  inscripcionSchema,  "Inscripciones");

export { inscripcionModel };

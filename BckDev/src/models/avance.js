import pkg from 'mongoose';
const { Schema, model } = pkg;


const avanceSchema = new Schema({
    idproyecto:{
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: true
    }, 
    descripcion: {
        type: String,
        required: true
    },
    observaciones:{
        type: String,
        required: true
    }
});
export default model("Avance", avanceSchema )
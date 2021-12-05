import Proyecto from "../../models/Proyecto.js"
import Inscripcion from "../../models/Inscripcion.js"
import Avance from "../../models/Avance.js"

const Query = {
    
    proyectos: async () => {
        return await Proyecto.find()
    },
    buscarProyecto: async(_,_id) => {
        return await Proyecto.findOne(_id)
    },
    proyectoslider: async(_, nombrelider) => {
        return await Proyecto.find(nombrelider)
    },

    inscripcions: async () => {
        return await Inscripcion.find()
    },
    buscarInscripcion: async(_,_id) => {
        return await Inscripcion.findOne(_id)
    },
    inscripcionsProy: async(_, idproyecto) => {
        return await Inscripcion.find(idproyecto)
    },

    avances: async () => {
        return await Avance.find()
    }
}

export default Query
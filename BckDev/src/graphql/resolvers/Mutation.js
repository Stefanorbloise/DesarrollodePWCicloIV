import Proyecto from "../../models/Proyecto.js"
import Inscripcion from "../../models/Inscripcion.js"
import Avance from "../../models/Avance.js"

const Mutation = {
    createProyecto: async(_, {nombre, objetivog, objetivose, presupuesto, fechainicio, fechafinal, nombrelider, idlider, estado, fase}) => {
        const newProyecto = new Proyecto({nombre, objetivog, objetivose, presupuesto, fechainicio, fechafinal, nombrelider, idlider, estado, fase})
        return await newProyecto.save()
    },
    actualizarProyecto: async(_, {_id, nombre, objetivog, objetivose, presupuesto, fechainicio, fechafinal, nombrelider, idlider, estado, fase}) => {
        const ProyectoEditado = await Proyecto.findByIdAndUpdate(_id, {
            nombre,
            objetivog,
            objetivose,
            presupuesto,
            fechainicio,
            fechafinal,
            nombrelider,
            idlider,
            estado,
            fase
        });
        return ProyectoEditado;
    },

    createInscripcion: async(_, {idproyecto, idestudiante, estado, fechaingreso, fechaegreso}) => {
        const newInscripcion = new Inscripcion({idproyecto, idestudiante, estado, fechaingreso, fechaegreso})
        return await newInscripcion.save()
    },
    actualizarInscripcion: async(_, {_id, idproyecto, idestudiante, estado, fechaingreso, fechaegreso}) => {
        const InscripcionEditado = await Inscripcion.findByIdAndUpdate(_id, {
            idproyecto,
            idestudiante,
            estado,
            fechaingreso,
            fechaegreso
        });
        return InscripcionEditado;
    },

    createAvance: async(_, {idproyecto, fecha, descripcion, observaciones}) => {
        const newProyecto = new Avance({idproyecto, fecha, descripcion, observaciones})
        return await newAvance.save()
    }
}

export default Mutation
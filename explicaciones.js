import conectarBD from "./db/db.js";
import { ObjetivModel } from "./models/objetiv.js";
import { ProyectModel } from "./models/proyecto/proyecto.js";
import { UserModel } from "./models/usuarios/usuarios.js";

const main = async () => {
  await conectarBD();


  await UserModel.create({
    correo: "strojasbl@unal.edu.co",
    identificacion: "1000949873",
    nombre: "Sergio",
    apellido: "Rojas Blandón",
    rol: 'ESTUDIANTE',
})
.then((u) => {
    console.log('Usuario creado', u);
})
.catch((e) =>  {
    console.error('Error creando el usuario', e);
});


};
main();

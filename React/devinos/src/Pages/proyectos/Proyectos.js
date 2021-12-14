import React, {useEffect} from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { GET_PROYECTOS } from "../../graphql/proyectos/queries";


const Proyectos = () => {
    const {data, error, loading} = useQuery(GET_PROYECTOS);
    useEffect(() => {
        console.log("data servidor",data)
    }, [data])
    
    if (loading) return <div>Cargando...</div>;


    
    return <div> 
        Datos PROYECTOS:
        <table className='tabla'>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Objetivo General</th>
              <th>Objetivo Especifico</th>                     
              <th>Estado</th>
              <th>Fase</th>
              <th>Fecha Final</th>
              <th>Fecha Inicio</th>
              <th>presupuesto</th>
              <th>Líder</th>
              <th>ID líder</th>
              <th>EDITAR</th>

            </tr>
          </thead>
          <tbody>
            {data && data.proyectos ? (
              <>
                {data.proyectos.map((u) => {
                  return (
                    <tr key={u._id}>
                      <td>{u.nombre}</td>
                      <td>{u.objetivog}</td> 
                      <td>{u.objetivose}</td> 
                      <td>{u.estado}</td> 
                      <td>{u.fase}</td> 
                      <td>{u.fechafinal}</td> 
                      <td>{u.fechainicio}</td> 
                      <td>{u.presupuesto}</td>
                      <td>{u.nombrelider}</td>
                      <td>{u.idlider}</td>
                       <td>
                        <Link to={`/Proyectos/editar/${u._id}`}>
                          <button title="editar">EDITAR</button>
                        </Link> 
                      </td>
                    </tr>
                  );
                })}
              </>
            ) : (
              <div>No autorizado</div>
            )}
          </tbody>
        </table>
    </div>;
};

export default Proyectos;
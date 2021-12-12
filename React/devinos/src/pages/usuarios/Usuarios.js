import React, {useEffect} from "react";
import { useQuery } from "@apollo/client";
import { GET_USUARIOS } from "../../graphql/usuarios/queries";
import { Link } from "react-router-dom";


const Usuarios = () => {
    const {data, error, loading} = useQuery(GET_USUARIOS);
    useEffect(() => {
        console.log("data servidor",data)
    }, [data])
    
    if (loading) return <div>Cargando...</div>;


    
    return <div> 
        Datos Usuarios:
        <table className='tabla'>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>           
              <th>Identificación</th>
              <th>Rol</th>
              <th>Estado</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {data && data.usuarios ? (
              <>
                {data.usuarios.map((u) => {
                  return (
                    <tr key={u._id}>
                      <td>{u.nombre}</td>
                      <td>{u.correo}</td>                
                      <td>{u.identificacion}</td>
                      <td>{u.rol}</td>
                      <td>{u.estado}</td>
                       <td>
                        <Link to={`/Usuarios/editar/${u._id}`}>
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

export default Usuarios;
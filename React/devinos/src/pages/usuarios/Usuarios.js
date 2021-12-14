import React, {useEffect} from "react";
import { useQuery } from "@apollo/client";
import { GET_USUARIOS_ROL } from "../../graphql/usuarios/queries";
import { Link } from "react-router-dom";


function Usuarios() {
    const {data, error, loading} = useQuery(GET_USUARIOS_ROL,{
      variables:{rol:'ESTUDIANTE'},
    });
    useEffect(() => {
        console.log("data servidor",data)
    }, [data])
    
    if (loading) return <div>Cargando...</div>;
    
    
    return <div id="main-section"> 
        USUARIOS
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
            {data && data. usuariosByRol ? (
              <>
                {data. usuariosByRol.map((u) => {
                  return (
                    <tr key={u._id}>
                      <td>{u.nombre}</td>
                      <td>{u.correo}</td>                
                      <td>{u.identificacion}</td>
                      <td>{u.rol}</td>
                      <td>{u.estado}</td>
                       <td>
                        <Link to={`/Index/Usuarios/editar/${u._id}`}>
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
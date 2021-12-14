import React, {useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USUARIO } from '../../graphql/usuarios/queries';
import Input from '../../components/Input';
import ButtonLoading from '../../components/ButtonLoading';
import useFormData from '../../Hooks/useFormData';
import { EDITAR_USUARIO_ESTADO } from '../../graphql/usuarios/mutations';
import { toast } from 'react-toastify';
import DropDown from '../../components/dropdown';
import { Enum_EstadoUsuario, Enum_Rol } from '../../utils/enums';

const EditarUsuario = () => {
    
  const { form, formData, updateFormData } = useFormData(null);
  const { _id } = useParams();
  const {data:queryData, error:queryError, loading: queryLoading} = useQuery(GET_USUARIO,{
        variables:{_id},
    });

    const [editarusuario, { data: mutationData, loading: mutationLoading, error: mutationError }] = 
    useMutation(EDITAR_USUARIO_ESTADO);
    
    
    const submitForm = (e)=>{
      e.preventDefault();
      editarusuario({
        variables:{ _id, ...formData},
      });
    };
    
    useEffect(() => {
      if (mutationData) {
        console.log("mutacion", mutationData )
      }
    }, [mutationData]);

    console.log('fd', formData)
    console.log('mt', mutationData)



  

    if (queryLoading) return <div>Cargando...</div>;

    return (
        <div id="main-section">
        <form
        onSubmit={submitForm}
        onChange={updateFormData}
        ref={form}
        className='actualizarUsuariosEstado'
      >

        <Input
          label='Nombre:'
          type='text'
          name='nombre'
          disabled={true}
          defaultValue={queryData.buscarUsuarios.nombre}
          required={true} 
        />
        <Input
          label='Correo:'
          type='email'
          disabled={true}
          name='correo'
          defaultValue={queryData.buscarUsuarios.correo}
          required={true}
        />
        <Input
          label='Identificación:'
          type='text'
          name='identificacion'
          disabled={true}
          defaultValue={queryData.buscarUsuarios.identificacion}
          required={true}
        />
         <DropDown
          label='Rol:'
          name='rol'
          disabled={true}
          defaultValue={queryData.buscarUsuarios.rol}
          required={true}
          options={Enum_Rol}
        />
        <DropDown
          label='Estado:'
          name='estado'
          defaultValue={queryData.buscarUsuarios.estado}
          required={true}
          options={Enum_EstadoUsuario}
        />
        <Input
          label='Contraseña:'
          type='text'
          name='contrasena'
          disabled={true}
          hidden={true}
          defaultValue={queryData.buscarUsuarios.contrasena}
          required={true}
        />
        <ButtonLoading
          disabled={Object.keys(formData).length===0}
          loading={mutationLoading}
          text='Confirmar'
        />
      </form>
        <Link to='/Index/Usuarios'>
          <button title="editar">VOLVER</button>
        </Link>
      </div>
  );
};

export default EditarUsuario;

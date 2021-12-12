import React, {useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USUARIO } from '../../graphql/usuarios/queries';
import Input from '../../components/Input';
import ButtonLoading from '../../components/ButtonLoading';
import useFormData from '../../Hooks/useFormData';
import { EDITAR_USUARIO } from '../../graphql/usuarios/mutations';
import { toast } from 'react-toastify';
import DropDown from '../../components/dropdown';

const EditarUsuario = () => {
    
  const { form, formData, updateFormData } = useFormData(null);
  const { _id } = useParams();
  const {data:queryData, error:queryError, loading: queryLoading} = useQuery(GET_USUARIO,{
        variables:{_id},
    });

    const [editarusuario, { data: mutationData, loading: mutationLoading, error: mutationError }] = 
    useMutation(EDITAR_USUARIO);
    
    
    const submitForm = (e)=>{
      e.preventDefault();
      editarusuario({
        variables:{ _id, ...formData, estado:'AUTORIZADO'},
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
        <div id="editarusuario">
        <Link to='/Usuarios'>
        <button title="editar">VOLVER</button>
        </Link>

        <form
        onSubmit={submitForm}
        onChange={updateFormData}
        ref={form}
        className='actualizarUsuarios'
      >

        <Input
          label='Nombre de la persona:'
          type='text'
          name='nombre'
          defaultValue={queryData.buscarUsuarios.nombre}
          required={true} 
        />
        <Input
          label='Correo de la persona:'
          type='email'
          name='correo'
          defaultValue={queryData.buscarUsuarios.correo}
          required={true}
        />
        <Input
          label='Identificación de la persona:'
          type='text'
          name='identificacion'
          defaultValue={queryData.buscarUsuarios.identificacion}
          required={true}
        />
        {/* <DropDown
          label='Estado de la persona:'
          name='estado'
          defaultValue={queryData.buscarUsuarios.estado}
          required={true}
          options={'AUTORIZADO', 'NO AUTORIZADO', 'PENDIENTE'}
        />
        <span>Rol del usuario: {queryData.buscarUsuarios.rol}</span> */}
        <ButtonLoading
          disabled={Object.keys(formData).length===0}
          loading={mutationLoading}
          text='Confirmar'
        />
      </form>
   
      </div>
  );
};

export default EditarUsuario;

import React, {useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_PROYECTO } from '../../graphql/proyectos/queries';
import Input from '../../components/Input';
import ButtonLoading from '../../components/ButtonLoading';
import useFormData from '../../Hooks/useFormData';
import { EDITAR_PROYECTO } from '../../graphql/proyectos/mutations';
import { toast } from 'react-toastify';
import DropDown from '../../components/dropdown';

const EditarProyecto = () => {
    
  const { form, formData, updateFormData } = useFormData(null);
  const { _id } = useParams();
  const {data:queryData, error:queryError, loading: queryLoading} = useQuery(GET_PROYECTO,{
        variables:{_id},
    });

    const [editarproyecto, { data: mutationData, loading: mutationLoading, error: mutationError }] = 
    useMutation(EDITAR_PROYECTO);
    
    
    const submitForm = (e)=>{
      e.preventDefault();
      editarproyecto({
        variables:{ _id, ...formData, estado:'619562e311bb77ed260188b7'},
      });
    };
    
    useEffect(() => {
      if (mutationData) {
        console.log("mutacion", mutationData )
      }
    }, [mutationData]);

    console.log('fd', formData)
 

    if (queryLoading) return <div>Cargando...</div>;
    
    return (
        <div id="editarproyectos">
        <Link to='/Proyectos'>
        <button title="editar">VOLVER</button>
        </Link>

        <form
        onSubmit={submitForm}
        onChange={updateFormData}
        ref={form}
        className='actualizarProyectos'
      >

        <Input
          label='Nombre del proyecto:'
          type='text'
          name='nombre'
          defaultValue={queryData.buscarProyecto.nombre}
          required={true} 
        />
        <Input
          label='Objetivo General'
          type='text'
          name='objetivog'
          defaultValue={queryData.buscarProyecto.objetivog}
          required={true} 
        />
        <Input
          label='Objetivos específicos'
          type='text'
          name='objetivose'
          defaultValue={queryData.buscarProyecto.objetivose}
          required={true} 
        />
        <Input
          label='Presupuesto'
          type='number'
          name='presupuesto'
          defaultValue={queryData.buscarProyecto.presupuesto}
          required={true} 
        />
        <Input
          label='Fecha inicio'
          type='text'
          name='fechainicio'
          defaultValue = {queryData.buscarProyecto.fechainicio}
          required={true} 
        />
        <Input
          label='Fecha final'
          type='text'
          name='fechafinal'
          defaultValue = {queryData.buscarProyecto.fechafinal}
          required={true} 
        />
        <Input
          label='Nombre líder'
          type='text'
          name='nombrelider'
          defaultValue = {queryData.buscarProyecto.nombrelider}
          required={true} 
        />

        <Input
          label='Fase'
          type='text'
          name='fase'
          defaultValue = {queryData.buscarProyecto.fase}
          required={true} 
        />
        <ButtonLoading
          disabled={Object.keys(formData).length===0}
          loading={mutationLoading}
          text='Confirmar'
        />
      </form>
   
      </div>
  );
};

export default EditarProyecto;

import './index.css'
import List from './components/Empleador';
import  { data } from '../data/data';


function App() {

  const job = data[1]; // Suponiendo que solo hay un trabajo en este ejemplo

  return (
    <>
    <div  className=' flex justify-center items-start'>
      
    <div className='max-w-md bg-primary/40 rounded-xl shadow-ms overflow-hidden md:max-w-xs px-7 py-6 pt-10 mt-10'  >
      <div className='flex justify-end mt-auto mb-4'>
          <p className=''>Empleador</p>
      </div>
      <div className='text-xl'><p > ListaPro</p></div>
      <p className='text-lg'>{job.Cargo}</p>
      <p className='text-sm'>{job.Descripcion}</p>
      <h1 className='text-lg'><strong>Acerca de:</strong></h1>
      <p className='text-sm'> {job.acercaDe}</p>
      <h1 className='text-lg'><strong>Teléfono:</strong></h1>
      <p className='text-sm'> {job.Telefono}</p>
      <h1 className='text-lg'><strong>Email:</strong> </h1>
      <p className='text-sm'>{job.Email}</p>
      <h1 className='text-lg'><strong>Dirección:</strong></h1>
      <p className='text-sm'>{job.Direccion}</p>
    </div>
       <hi className=" ml-10 mt-3 mb-10 mr-8 shadow-sm bg-primary/40 rounded -xl" >Empleos Publicados recientemente </hi>
     <List data={data} />
    </div>
    </> 
  );
}

export default App

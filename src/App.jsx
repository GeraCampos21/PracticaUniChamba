import './index.css'
import List from './components/Empleador';
import { data } from '../data/data';


function App() {

  const job = data[0]; // Suponiendo que solo hay un trabajo en este ejemplo

  return (
    <>

      <div className=' flex justify-center items-start'>
        <div className='max-w-md bg-primary/40 rounded-xl shadow-ms overflow-hidden md:max-w-xs px-4 py-5 pt-1 mt-10 ml-10'  >
          <div className='flex justify-end mb-1 text-xs'>
            <p>Empleador</p>
          </div>
          <div className='ml-5 mb-1 active-icon'>
            <ion-icon name="business"></ion-icon>
          </div>
          <div className='text-xl  '><p > <strong>ListaPro</strong></p></div>
          <p className='text-ms mt-4'>{job.Cargo}</p>
          <p className='text-justify text-xs mt-1'>{job.Descripcion}</p>
          <h1 className='text-lg mt-1'><strong>Acerca de:</strong></h1>
          <p className=' text-justify text-xs mt-1'> {job.acercaDe}</p>
          <h1 className='text-lg mt-3' ><ion-icon className="text-base" name="call"></ion-icon> <strong className='ml-1'> Teléfono:</strong></h1>
          <p className='text-sm ml-7'>{job.Telefono}</p>
          <h1 className='text-lg mt-1'> <ion-icon name="mail-outline"></ion-icon><strong className='ml-2'>Email:</strong> </h1>
          <p className='text-sm ml-7 text-sky-500'>{job.Email}</p>
          <h1 className='text-lg'><ion-icon name="location-sharp"></ion-icon><strong className='ml-2' >Dirección:</strong></h1>
          <p className='text-sm ml-7 mt-100'>{job.Direccion}</p>
        </div>
        <hi className=" ml-10 mt-3 mb-10 mr-8 shadow-sm bg-primary/40 rounded -xl" >Empleos Publicados recientemente </hi>
        <List data={data} />
      </div>
    </>
  );
}

export default App

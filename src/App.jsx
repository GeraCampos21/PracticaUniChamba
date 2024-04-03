import './index.css'

const data = [
  {
    id: 1,
    Cargo: "Desarrollo de Software",
    Descripcion: "Contrata talento digital en El Salvador más rápido obteniendo acceso inmediato a los mayores candidatos pasivos, ya preseleccionados.",
    acercaDe: "Somos un grupo de desarrolladores,una empresa dedicada al rubro y comercialización de servicios logísticos y comerciales. Actualmente nos encontramos en la búsqueda de un desarrollador FullStack.",
    Telefono: "78556367", 
    Email: "fulldesarrollo@gmail.com", 
    Direccion: "Bypass, Santa Ana, Santa Ana"
  },

  {
    id: 2,
    Cargo: "Desarrollo de Backend",
    Descripcion: "Contrata talento digital en El Salvador más rápido obteniendo acceso inmediato a los mayores candidatos pasivos, ya preseleccionados.",
    acercaDe: "Somos un grupo de desarrolladores,una empresa dedicada al rubro y comercialización de servicios logísticos y comerciales. Actualmente nos encontramos en la búsqueda de un desarrollador FullStack.",
    Telefono: "78556367", 
    Email: "fulldesarrollo@gmail.com", 
    Direccion: "Bypass, Santa Ana, Santa Ana"
  },

];

function App() {

  const job = data[1]; // Suponiendo que solo hay un trabajo en este ejemplo

  return (
    <div className='max-w-md bg-primary/40 rounded-xl shadow-ms overflow-hidden md:max-w-xs px-7 py-6 pt-10 mt-10'  >
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
  );
}

export default App

import './index.css'
import List from './components/empleosPublicados';
import Empleador from './components/empleador';
import { data } from '../data/data';


function App() {
  const job = data[0]; // Suponiendo que solo hay un trabajo en este ejemplo
  return (
    <>
      <div className='container mx-auto  p-8 mt-1'>
        {/**Este es el div para repartir en las columnas que ocuparan los componente */}
        <div className='grid grid-cols-2 '>
          <div>
              <Empleador job = {job} />
          </div>
          {/**Este es el div para lo que es el segundo componente el componente del filtro de chambas */}
          <div className=' flex flex-col space-y-9  '>
            <div>
              <hi >Empleos Publicados recientemente </hi>
            </div>
            <div className=' w-px-full'>
              <List data={data} />
            </div>
            <div className='flex justify-end '>
              <button className='bg-primary text-fuchsia-50 text-xs px-10 py-1 rounded-sm' >Crear oferta <ion-icon name="add-circle-outline"></ion-icon></button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App

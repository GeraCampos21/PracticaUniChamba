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
        <div className='grid grid-cols-2 md:grid-cols-2 place-items-stretch'>
          <div>
              <Empleador job = {job} />
          </div>
          {/**Este es el div para lo que es el segundo componente el componente del filtro de chambas */}
          <div className='  '>
            <hi >Empleos Publicados recientemente </hi>
            <List data={data} />
          </div>
        </div>
      </div>

    </>
  );
}

export default App

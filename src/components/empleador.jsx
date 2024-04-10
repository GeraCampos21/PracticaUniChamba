
// eslint-disable-next-line react/prop-types
export default function Empleador({job}){
    return (
        <>
            {/**Este es el div para el primer componente */}
            <div className='flex  flex-col justify-between space-y-28  bg-primary/40 rounded-xl  md:max-w-xs px-4 py-5 pt-1' >
                <div>
                    
                    {/**Este es el div del contenido del logo de la empresa*/}
                    <p className='flex justify-end mb-1 text-xs'>Empleador</p>
                    <div className='ml-5 mb-1 active-icon '>
                        <ion-icon name="business"></ion-icon>
                    </div>
                    {/**Este es el div del contenido del texto que llevara*/}
                    <div className='text-xl  '><p > <strong>ListaPro</strong></p></div>
                    <p className='text-xs mt-1'>{job.Cargo}</p>
                    <p className='text-justify text-xs mt-1'>{job.Descripcion}</p>
                    <h1 className='text-base mt-1'><strong>Acerca de:</strong></h1>
                    <p className=' text-justify text-xs mt-1'> {job.acercaDe}</p>
                    <h1 className='text-base mt-3' ><ion-icon name="call"></ion-icon> <strong className='ml-1'> Teléfono:</strong></h1>
                    <p className='text-sm ml-7'>{job.Telefono}</p>
                    <h1 className='text-base mt-1'> <ion-icon name="mail-outline"></ion-icon><strong className='ml-2'>Email:</strong> </h1>
                    <p className='text-sm ml-7 text-sky-500'>{job.Email}</p>
                    <h1 className='text-base'><ion-icon name="location-sharp"></ion-icon><strong className='ml-2' >Dirección:</strong></h1>
                    <p className='text-sm ml-7 mt-100'>{job.Direccion}</p>
                </div>

                {/**Este es el div del contenido que llevara lo que es el botton*/}
                <div className='flex justify-center '>
                    <button className='bg-primary text-fuchsia-50 text-xs px-10 py-1 rounded-lg' > Contacta conmigo <ion-icon name="chatbox-outline"></ion-icon></button>
                </div>
            </div>
        </>
    );
};

 
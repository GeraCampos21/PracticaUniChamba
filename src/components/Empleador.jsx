
// eslint-disable-next-line react/prop-types
export default function List({data}) {
    // eslint-disable-next-line react/prop-types
    const listItems = data.map(person =>
      <li key={person.id}>
        <p>
          <b>{person.Cargo}</b>
        </p>
        <p>{person.Descripcion}</p>
      </li>
    );
    return (
         <div className='max-w-md mx-auto bg-primary/40 rounded-xl shadow-xl overflow-hidden md:max-w-2xl mt-10 mx-100 ml-100'>
            <div className="md:flex"> 
            <ion-icon name="alarm-outline"></ion-icon> 

            <ul className="p-8 mr-10">
            {listItems}
            </ul></div>
         </div>
         
    )
        
  }
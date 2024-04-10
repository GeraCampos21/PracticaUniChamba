
// eslint-disable-next-line react/prop-types
export default function List({data}) {
    // eslint-disable-next-line react/prop-types
    const listItems = data.map(person =>
      <li key={person.id}>
        <p>
          <b>{person.Cargo}</b>
        </p>
        <p>{person.entidad}</p>
        <p>{person.Descripcion}</p>
      </li>
    );
    return (
         <div className='flex basis-4/6 bg-primary/40 rounded-xl shadow-xl mt-3  '>
            <div className="md:flex"> 
            <ul className="p-8 mr-10  overflow-y-scroll">
            {listItems}
            </ul></div>
         </div>
         
    )
        
  }
import pj from '../../public/json/characters.json'

export function Characters(){
    return(
      <>
        
        {
            pj.personajes.map((personaje,index) => {
                return (
                    <>
                        <h1 className="relative text-4xl z-10">{personaje.name}</h1>
                        <img className=" object-cover z-0 absolute scale-x-[-1] h-[520px]" src={personaje.img} alt={personaje.name} />
                    </>
                
                )
            })
        }
      
      
      </>
    )
}
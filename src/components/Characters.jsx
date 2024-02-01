import pj from '/src/json/characters.json'
import { Swiper, SwiperSlide } from "swiper/react";

// IMPORT SWIPER STYLE
import "swiper/css";
import "./character.css";

export function Characters(){
    const atributos = ["Fuerza","Destreza","Constitucion","Inteligencia","Sabiduria","Carisma"]
    return(
      <>
      <Swiper loop={true}>

        {
            pj.personajes.map((personaje,index) => {
                return(
                    <SwiperSlide key={index} >
                        <div className="grid grid-cols-1 grid-rows-1 ">
                            <div className='flex flex-row items-start '>
                                <h1 className="ml-2 font-bold text-5xl z-10 w-[50%] text-start">{personaje.name}</h1>
                                <div className='w-[50%] text-center flex flex-col items-end'>
                                    {
                                        Object.values(personaje.atributos[0]).map((atributo,index)=> {
                                            return (
                                                <>
                                                   <div className='border-2 w-[50%] m-3 z-20 bg-slate-500 text-black' key={index}> 
                                                        <h2 className="text-[12px]">{atributos[index]}</h2>
                                                        <p className="text-3xl">{atributo.sub}</p>
                                                        <p  className="text-base">{atributo.original}</p>
                                                   </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <img loading="lazy" className="object-cover my-4 absolute drop-shadow-2xl z-0 scale-x-[-1] 2xl:h-[627px] rounded-lg sm:h-[355px] " 
                                src={personaje.img} 
                                alt={personaje.name}/>
                        </div>   
                    </SwiperSlide>
                )
            })
        }
      </Swiper>
      
      
      </>
      
    )
}
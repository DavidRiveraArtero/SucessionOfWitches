import pj from '/src/json/characters.json'
import { Swiper, SwiperSlide } from "swiper/react";

// IMPORT SWIPER STYLE
import "swiper/css";
import "./character.css";

export function Characters(){
    return(
      <>
      <Swiper>

        {
            pj.personajes.map((personaje,index) => {
                return(
                    <SwiperSlide key={index} >
                        <div className='flex flex-col'>
                            <h1 className="text-5xl z-10 text-center">{personaje.name}</h1>
                            {
                                personaje.name == "Gojo" ? 
                                <img className=" w-[50%] object-cover drop-shadow-md absolute z-0 scale-x-[-1] 2xl:h-[627px] rounded-lg sm:h-[355px]" 
                                    src={personaje.img} 
                                    alt={personaje.name}/> 
                                    :     
                                <img className=" object-cover drop-shadow-md absolute z-0 scale-x-[-1] 2xl:h-[627px] rounded-lg sm:h-[355px]" 
                                    src={personaje.img} 
                                    alt={personaje.name}/>
                            }
                        
                        </div>
                    </SwiperSlide>
                )
            })
        }
      </Swiper>
      
      
      </>
      
    )
}
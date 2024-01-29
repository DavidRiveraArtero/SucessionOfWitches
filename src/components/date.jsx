import { useEffect,useState } from "react"

export function PersonalDate(){
    const getSec = new Date()
    const [fullDay,SetFullDay] = useState()
    const [getHMS, setGetHMS] = useState()
    
    useEffect(() => {
        
        const interval = setInterval(() => {
            const getSecFinalSec = new Date()
            const f = new Intl.DateTimeFormat("es-sp", {
                dateStyle: "short",
                timeStyle: "medium"
            })
            SetFullDay(f.format(getSecFinalSec).split(",")[0])
            setGetHMS(f.format(getSecFinalSec).split(",")[1])
        })

        return () => clearInterval(interval);
    },[])

    return(
        <>
            <h1 className="text-4xl text-cyan-300" >{fullDay}</h1>
            <h2 className="text-2xl text-cyan-300/75">{getHMS}</h2>
        </>
    )
}

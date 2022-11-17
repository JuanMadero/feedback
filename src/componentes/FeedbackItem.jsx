import { useState } from "react"

const FeedbackItem = () =>{

    //Estados: presisten informacion a traves del ciclo de vida de un unico componente
    //estados iniciales
    const [rating, setRating ] = useState(2) 
    const [text, setText] = useState("Mejorar curso, mejores recursos")

    const addNota=()=>{
        //cambiar estado a rating
        //paraketro para el valor anterior
        setRating((prev)=>{
            return prev + 1
        })
    }

    const resNota=()=>{
        setRating((prev)=>{
            return prev -1
        })
    }

    return (
        <div className="card">
            <div className="num-display">
                { rating }
            </div>
            <div className="text-display">
                {text}
            </div>
            <button onClick ={ addNota}>
                Sumar nota
            </button>
            <button onClick ={ resNota}>
                Resta Nota
            </button>
        </div>
    
    )

}

export default FeedbackItem
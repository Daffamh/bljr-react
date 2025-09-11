import { useState } from "react"

export default function Select(){
    const [myCar,setMyCar] = useState("Cb Nyenii")

    const handleChange = (event) =>{
        setMyCar(event.target.value)
    }

    return(
        <form>
            <select value={myCar} onChange={handleChange}>
                <option value="CB Nyenii">Cebeh</option>
                <option value="Mio">Mio</option>
                <option value="Ninja">Ninja</option>
            </select>
        </form>
    )
}
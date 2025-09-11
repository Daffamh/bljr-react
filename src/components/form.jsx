import { useState } from "react"

export {AddingForm,Controlled,MyForm}

// Adding Forms in React
function AddingForm(){
    return (
        <form>
            <label>Enter your name:
                <input type="text" />
            </label>
        </form>
    )
}

// Controlled Components
function Controlled(){
    const [name,setName] = useState("");

    function handleChange(e){
        setName(e.target.value)
    }

    return (
        <form>
            <label>
                ENTER YOUR NAME:
                <input
                 type="text"
                 value={name}
                 onChange={handleChange}                
                />
            </label>
            <p>Current value: {name}</p>
        </form>
    )
}

// React Submit Forms
function MyForm(){
    const [name,setName] = useState("")

    function handleChange(e){
        setName(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault();
        alert(name)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Masukan Nama Kamu:
                <input
                 type="text"
                 value={name}
                 onChange={handleChange}
                />
            </label>
            <input type="submit" />
        </form>
    )
}

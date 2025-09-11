import { useState } from "react";

export default function MultiInput(){
    const [inputs,setInputs] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    return (
        <form>
            <label>First Name:
                <input
                 type="text"
                 name="firstname"
                 value={inputs.firstname}
                 onChange={handleChange}
                />
            </label>
            <label>Last Name:
                <input 
                type="text"
                name="lastname"
                value={inputs.lastname}
                onChange={handleChange}
                />
            </label>
            <p>Current value: {inputs.firstname} {inputs.lastname}</p>
        </form>
    )
}
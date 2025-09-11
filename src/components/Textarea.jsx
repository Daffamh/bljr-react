import { useState } from "react";

export default function MyTxta(){
    const [mytxt,setMytxt] = useState("");

    function handleChange(e){
        setMytxt(e.target.value);
    }

    return (
        <form >
            <label>Write here:
                <textarea 
                value={mytxt}
                onChange={handleChange}
                />
            </label>
            <p>Current value:{mytxt}</p>
        </form>
    )
}
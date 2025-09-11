import {useState,useTransition} from "react"

export default function SearchBar(){
    const [text,setText] = useState("")
    const [results,setResults] = useState("")
    const [isPending,startTransition] = useTransition();

    const handleChange = (e) => {
        // Urgent: Update input right away
        setText(e.target.value);

        // Non-urgent: Update search results
        startTransition(() => {
            setResults(e.target.value);
        });
    };

    return(
        <div>
            <input value={text} onChange={handleChange} />
            {isPending ? (
                <p>Ntenii..</p>
            ) : (
                <p>Search result for : {results}</p>
            )}
        </div>
    )
}
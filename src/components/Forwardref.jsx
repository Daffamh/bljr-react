import { forwardRef,useRef } from "react";

const MyInput = forwardRef((props, ref) => (
    <input ref={ref} {...props} />
));

export default function Forward(){
    const inputRef = useRef()

    const focusInput = () => {
        inputRef.current.focus()
    }

    return (
        <div>
            <MyInput ref={inputRef} placeholder="Type here..."/>
            <button onClick={focusInput}>Focus Input</button>
        </div>
    )
}
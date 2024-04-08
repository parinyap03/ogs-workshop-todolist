import { useState } from "react";


export default function FuncExample() {
    const [count,setCount]=useState(0);

    const increase=()=>{
        setCount(count+1)
    }

    return (
        <div>
            <h2>Function component</h2>
            <h3>Count : {count} </h3>
            <button onClick={increase}>increase</button>
        </div>
    )
}

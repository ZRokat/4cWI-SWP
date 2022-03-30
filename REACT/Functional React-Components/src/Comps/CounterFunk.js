import { useEffect, useState } from "react";

export default function CounterFunk(){
    
    const [count,setCount] = useState(0);
    const [person, setPerson] = useState({"firstname" : "Andi", "lastName" : "Riedmann"})

    let increase = () => {
        setCount(count + 1)
        setPerson({"firstname" : "hans"})
    }

    useEffect(()=>{
        console.log("started Func");
    },[count]);

    return (
        <div>
            <h1>Functional Counter</h1>
            <h2>{count}</h2>
            <button onClick={increase}>inc</button>
            {person.firstname}
        </div>
    );
}


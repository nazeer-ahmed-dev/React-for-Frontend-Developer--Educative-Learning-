import { useState } from "react"

 export default function  FunctionBasedComponent(){

    const [value,setValue] = useState('');

    const chanage = event => setValue(event.target.value);

    return(

        <>
        
        <input type={"text"} onChange={chanage} />
        <h1>{value}</h1>
        </>
    );

}

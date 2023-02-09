import { useReducer } from "react"

const intitalstate = 0

const reducer = (state,action) =>{
        if(action.type=="inc")
        {
            return state+1;
        }
        else if(action.type=="dec")
        {
            return state-1;
        }
        else
        {
              throw new Error();
        }
}

export default function Reducer()
{

    const [state,dispatch] = useReducer(reducer , intitalstate)


    return(
        <>
        <h1>{state}</h1>
        <button onClick={dispatch({type:"inc"})}>+</button>
        <button onClick={dispatch({type:"dec"})}>-</button>
        </>
    )
}
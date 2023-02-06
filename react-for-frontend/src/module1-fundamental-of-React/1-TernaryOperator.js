import React from "react";

export default class TernaryOperator extends React.Component
{
    render()
    {
        const user = [
            {name:"Nazeer Ahmed"},
            {name:"Naveed Ahmed"},
            {name:"Nazakat Ahmed"}
        ]
        const trigger = true;

        if(!trigger)
        {
            return null;
        }
        return(
            <>
            <h1>List of Names </h1>
                {
                    <ul>
                      { user.map(value=>
                            <li>{value.name}</li>
                        )}
                    </ul>

                }
                {/* Optimized Version of above Code */}
                        {/* if else statment */}
               <div>
                    {trigger ? ( <ul>
                            {user.map(value=><li>{value.name}</li>)}

                    </ul>) : (null)
                    }
               </div>
               {/* onside condition */}
               <div>
                {
                    trigger && (
                        <ul>
                        {user.map(value=><li>{value.name}</li>)}
                        </ul>
                    )
                }
               </div>
            </>
        )
    }
}
import React from "react";

export default class HOCHOF extends React.Component{
    
    constructor(props)
    {
        super(props)
        
        this.state = {
            query: '',
            };
            
            this.onChange=this.onChange.bind(this);
    }

    onChange(event)
    {
        this.setState({query:event.target.value})
    }

    render()
    {
        const users = [

            {name:"Nazeer Ahmed"},
            {name:"Naveed Ahmed"}
        ]

        return(

                <>
                    <input
                    type="text"
                    onChange={this.onChange}
                    />
                    <ul>
                        {
                            users.filter(user => user.name == this.state.query).map(value => <li>{value.name}</li>)
                        }
                    </ul>
                </>
        );
    }

}
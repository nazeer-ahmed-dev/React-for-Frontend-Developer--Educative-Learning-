import React from "react";
const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

export default class ReactLibraries extends React.Component
{

    constructor(props)
    {
        super(props)

        this.state = {

            title:"Hi",
        }

    }
    componentDidMount()
    {
        fetch(API+DEFAULT_QUERY).then(resp => resp.json()).then(value => this.setState({title:value.hits[0].title}))
    }
    
    render()
    {
        return(
                <h1>{this.state.title}</h1>
        );
    }
} 
import React from 'react'
import App from './App'


const Child = (props) => {
    console.log("rerendering child");
    return (
        <p> {props.name} </p>
      )
}

export default Child
import React from 'react'

export default function PropsObjectS7(props) {
  return (
    <div>
        {/* object as props : in this case we pass the value of one object from
        one component to another component 
        syntax: props.titlein app.js.property */}
      <h4>The name of the student is {props.title.names}</h4>
      <h4>The name of the student is {props.title.age}</h4>
       
    </div>
  )
}

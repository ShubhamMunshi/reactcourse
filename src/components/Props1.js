import React from 'react'

export default function Props1(props) {
  return (
   <>
   {/* props: this is use as arugments from the user side 
   we can  pass various values from the Component declaration in App.js to the given componet 
   file using this props 
   To use props we have to declare props as argument in that component 
   and then use it in the {}  */}

   {/* <h4>{props.title}</h4> */}

   <h4>The name of the car is {props.title}</h4>
  
</>
  )  
}

Props1.defaultProps={
    title: "shubham"
}

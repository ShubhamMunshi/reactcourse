import React, { useState } from 'react'

export default function Practice(props) {
  const[btntext,setbtntext]=useState('Dark Mode')

  const[styles,setstyles]=useState({
    color:'black',
    background:"white"
  })
   const changeMode=()=>{
    if(styles.color==="black"){
   setstyles({
    color:'white',
    background:"black"
   })
   setbtntext("Light Mode")
    }else{
      setstyles({
        color:'black',
        background:"white"
       })
       setbtntext("Dark Mode")
    }
   }
  return (
    <>
    <div className="container" style={styles}>
      <p>the name of concept is hooks </p>
      <p>it is use to store the state of the component</p>
      <p>also it chages within the life of the componet</p>
      <button type="button" class="btn btn-primary" onClick={changeMode}>{btntext}</button>

    </div>
    </>
  )
}

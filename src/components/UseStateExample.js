import React, { useState } from 'react'

export default function UseStateExample() {
  const[btexts,setbtexts]= useState("Dark Mode");
  const[ct, setct]=useState({
    color:'black',
    backgroundColor:'white'
  });
  let toggles=()=>{
   if(ct.color==='black'){
    setct({
      color:'red',
      backgroundColor:"black",
      fontSize:'25px',
      border:'5px dotted green',
      textAlign:'center'

    })
    setbtexts("Light Mode")
   }else{
    setct({
      color:'black',
    backgroundColor:'white'
    })
    setbtexts("Dark Mode")

  }
  }
  
  return (
    <div>
      <div className='container' style={ct}>
        <h1>Shubham Munshi</h1>
    </div>
    <button type="button" class="btn btn-primary mx-10 " onClick={toggles}>{btexts}</button>

    </div>
  )
}

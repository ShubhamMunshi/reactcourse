import React, { useState } from 'react'

export default function Example() {
    const[btntexts,setbtntexts]=useState("Enable Dark Mode")

    const[mystyle,funcmystyles]=useState({
        color:'black',
        backgroundColor:'white'
    })
    let togglecolor=()=>{
        if(mystyle.color=='black'){
    funcmystyles({
        color:'white',
        backgroundColor:'black'
    })
    setbtntexts("Enable Light Mode")
    }
    else{
        funcmystyles({
            color:'black',
        backgroundColor:'white'
        })
        setbtntexts("Enable Dark Mode")
    }
    }
    
  return (
    <>
     <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1"><h4>Enter text here</h4></label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" style={mystyle}></textarea><br />
    <button type="button" class="btn btn-primary" onClick={togglecolor}>{btntexts}</button>
  </div>
    </>
  )
}


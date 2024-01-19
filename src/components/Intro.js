import React, { useState } from 'react'

export default function Intro() {
    const[style,myStyle]=useState({
        color:"red",
        textAlign:"center",
        backgroundColor:"aqua",
        display:'element'
    })
    const[btntext,setbtntext]=useState("click here")
    let show=()=>{
        document.getElementById("demo").innerHTML="Wavar Ahe Tr Power Ahe"
    }
  return (
    <>
     <h1 style={style}><strong>Welcome to world of Poultry Farming</strong></h1>
<center> <button type="button" class="btn btn-primary" onClick={show}>{btntext}</button>
</center>
     <h4 id='demo' style={{textAlign:"center", fontSize:"35px"}}></h4>

    </>
  )
}

import React, { useState } from 'react'
export default function LikePost(){
    const[bttexts , setbttexts]=useState("Like Post")
    let toggle=()=>{
        setbttexts("Liked")
    }
    return(<>
    <div className='container' >
        <p>this is the case of usestate and hooks </p>
        <p>Hooks are state which are used to store the properties of the component</p>
        <p>this properties changes from time to time</p>
        <button type="button" class="btn btn-primary" onClick={toggle}>{bttexts}</button>

    </div>
    </>)
}
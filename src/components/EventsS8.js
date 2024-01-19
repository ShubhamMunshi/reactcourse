import React from 'react'

export default function EventsS8() {
   
function show(a){
    alert("hello dear"+a)
}
function alerts(){
    alert("This is alert event")
}
  return (
    <div>
      <button className='btn btn-primary' onClick={alerts}>Click  Here</button><br />
      {/* in the blwo case we pass arguments to the event so we use following syntax */}
      <button className='btn btn-primary' onClick={()=>show("shubh")}>Clikc Here</button>

      <br />


    </div>
  )
}
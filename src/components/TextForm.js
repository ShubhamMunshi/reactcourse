import React, { useState } from 'react'

export default function TextForm() {
  //   usestate is use to set some variable and its initial value 
  //   this usestate is always declared before the return statement 
  //   we can not directly change the value of text but
  //   we have to use the function which we declared for it
    const[text , setText]= useState("enter text here")
    const handleUpClick=()=>{
      let newText= text.toUpperCase();
      setText(newText)
    }
    const handleOnChange=(event)=>{
      setText(event.target.value)
    }
   
  return (
    <div className="mb-3">
        <h3>Enter text here</h3>
  <textarea className="form-control" placeholder="Leave a comment here" value={text}  onChange={handleOnChange} id="floatingTextarea2" rows="10"></textarea>
  {/* here first we set the value in the textarea as text and then in OnChange function we use setText to add new text 
  to given field and int eh UpClick function we conver the text to the UpperCase  */}
  <br />
  <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
</div>
    
  )
}

import React, { useState } from 'react'

export default function Textutils(props) {

  // text is hook here 
  const[text,setText]=useState("default ")
  const handleUpClick=()=>{
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showAlert("conveted To upper case","success")
  }
  const handleUpClicks=()=>{
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showAlert("conveted To Lower case","success")

  }
  const handleOnChange=(event)=>{
  setText(event.target.value)

  }
  return (
    <> 
       <div className="form-group" style={{backgroundColor:props.mode==='black'?'#024545':'white', color:props.mode==='black'?'violet':'black',textAlign:'center'}}>
    <label htmlFor="exampleFormControlTextarea1"><h4>Enter text here</h4></label>
    <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor:props.mode==='black'?'grey':'white'}}  value={text} onChange={handleOnChange}rows="3"></textarea><br />
 
      <button className="btn-primary" onClick={handleUpClick}>Uppercase</button>
      <button className="btn-primary" onClick={handleUpClicks}>LowerCase</button>

      {/* here we have defined 'text' as Hook which is like state and its value also changes 
      By OnChnage() function we can change the value of text using setText()  */}

      <div className="container" > 
        <h5 style={{color:props.mode==='black'?'red':'black'}}>Text Summery is </h5>
        <p>Number of characters are {text.length}</p><br />
  <p>Number of words are {text.split(" ").length-1}</p>
      </div>
      </div>
    </>
  )
}

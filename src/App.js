import { useState } from 'react';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Textutils from './components/Textutils';
import Alert from './components/Alert';
// import Alerts from './components/Alerts';
// import LikePost from './components/LikePost';
import About from './components/About';
// import { Router } from 'react-router-dom';
// import Example from './components/UseStateEx';
// import EventsS8 from './components/EventsS8';
// import ClassFunction from './components/ClassFunction';
// import ComponentsEx from './components/ComponentsEx';
// import UseStateExample from './components/UseStateExample';
// import PropsObjectS7 from './components/PropsObjectS7';
// import Practice from './components/Practice';
import TextForm from './components/TextForm';
import Intro from './components/Intro';

function App() {  
  // const name={
  //   names:"shubham",
  //   age:22,
  //   Home:"Daryapur"
  // }
   
  const[mode,setMode]=useState('white');
  let toggle=()=>{
    if(mode==='white'){
      setMode('black')
      document.body.style.backgroundColor="grey"
      showAlert("Dark Mode enabled","success")
    }
    else{
      setMode('white')
      document.body.style.backgroundColor="white"
      showAlert("light Mode enabled","success")


    }
  }
  // here we set alert as the hook variable with its initial value as null
  const[alert,setAlert]=useState(null)
  // now we declare one function which receives some values and it contain 
  // setAlert function which chages the properties of alert variable
  let showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }
  setTimeout(() => {
    setAlert(null)
  }, 2000);
 


  return (
    <>
  
  {/* <br /> */}
  {/* <div className="container">
  <TextForm/>
  </div> */}
 {/* <ClassFunction/> */}
   
   
  {/* <ComponentsEx/>     */}
  {/* <EventsS8/> */}
  
  {/* <Example/> */}
  {/* <LikePost/> */}
  {/* <UseStateExample/> */}
  {/* <Practice/> */}
  {/* <Textutils mode={mode} showAlert={showAlert} /> */}

<Router>
<Navbar mode={mode} toggle={toggle}/>
<Alert alert={alert}/>
{/* <Alerts alert={alert}/> */}
<Routes>
          <Route exact path="/about" element={<About />} />
          <Route path="/intro" element={<Intro />} />

          <Route path="/" element={<TextForm />} />
          <Route path="/textutils" element={<Textutils mode={mode} showAlert={showAlert} />} />

        </Routes>
        </Router>
 </>
  );
}
export default App;

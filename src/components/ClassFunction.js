import React from "react";

export default class ClassFunction extends React.Component{
  constructor(){
    super()
    this.state={color:"red"};
  }
render(){
 
  return <h4>the color of car is {this.state.color}</h4>;
   
}
}
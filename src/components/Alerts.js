import React from 'react'

export default function Alerts(props) {
  return (
    //  if props.alert is null the the next expression do not execute
    // if props.alet is not null then it executes
    // also we can use properties of alert variable using props.alert.msg/type 
   props.alert && <div className={`alert alert-warning alert-dismissible fade show`} role="alert">
  
  {props.alert.msg} :{props.alert.type}
</div>
  )
}

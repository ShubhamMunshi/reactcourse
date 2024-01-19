import React from 'react'

export default function Alert(props) {
  return (
     //  if props.alert is null the the next expression do not execute
    // if props.alet is not null then it executes
    // also we can use properties of alert variable using props.alert.msg/type 
   props.alert && <div className={`alert alert-${props.alert} alert-dismissible fade show`} role="alert">
   <h4>{props.alert.type}:</h4>{props.alert.msg}
</div> 
  )
}

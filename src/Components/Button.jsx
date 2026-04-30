import React from 'react'

const Button = (props) => {
  return (
   <button style={{backgroundColor:props.backgroundColor,color:props.color}} onClick={props.onClick} className={props.className}>
     {props.text}
   </button>
  )
}

export default Button

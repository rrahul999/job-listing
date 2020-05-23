import React from 'react'

const Checkbox = (props) => {
  return (
   
      <li className="list-inline-item">
      {props.value}<input key={props.id} onClick={props.handleCheckbox} type="checkbox" checked={props.isChecked} value={props.value} /> 
      </li>
   
  )
}

export default Checkbox

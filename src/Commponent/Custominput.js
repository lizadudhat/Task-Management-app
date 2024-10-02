import React from 'react'
import '../App.css';  

const Custominput = (props) => {
  return (
    <div className='inputwraper'>
        <label>{ props.name}</label>
        <input className='inputform'placeholder={props.placeholder} onChange={props.change}></input>
      
    </div>
  )
}

export default Custominput

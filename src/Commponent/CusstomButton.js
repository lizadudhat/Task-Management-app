import React from 'react'
import '../App.css';  
const CusstomButton = (props) => {
  return (
  
            <button  onClick={props.click} className='btn'style={{backgroundColor:props.bg,color:props.color}}>{props.name}</button>
                
            
       
  )
}

export default CusstomButton

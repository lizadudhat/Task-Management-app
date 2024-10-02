import React from 'react';
import '../App.css';  
import CusstomButton from './CusstomButton';

const Card = (props) => {
  return (
    <div className={`card ${props.completed ? 'completed' : ''}`}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div className='btnwraper'>
        <CusstomButton color='white' bg='red' name='Delete' click={props.onDelete} />
        <CusstomButton color='white' bg='green' name='Edit' click={props.onEdit} /> 
      </div>
    </div>
  );
}

export default Card;

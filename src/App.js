import React from 'react';
import './App.css';

function Card(Props){
return(
    <div className="parent">
    <div className="card">
    <img src={Props.imgsrc} alt="Avatar"/>
      <div className="container">
    <h4><b>{Props.name}</b></h4> 
    <h2>{Props.title}</h2> 
    <h2>Age: {Props.age}</h2> 
  </div>
</div>

    </div>
)
}

export default Card;

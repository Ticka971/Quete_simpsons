import React from 'react';
import './Citation.css';


function Citation({simpson}){
  return(
    <div className="simpson-citation">
      <img src={simpson.image} alt={simpson.character}/>
      <ul>
        <li>Character: {simpson.character} {simpson.characterDirection}</li>
        <li>Quote: {simpson.quote}</li>
      </ul>

    </div>
  )
  
}

export default Citation;
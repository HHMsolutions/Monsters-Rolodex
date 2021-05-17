import React from 'react';

//importing css
import './card.styles.css';

export const Card = props => (
    // using the card-container class from card.style.css
    <div className="card-container">
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="cool monster" />
       <h2> {props.monster.name} </h2>
       <p>{props.monster.email}</p>
    </div>
)
    

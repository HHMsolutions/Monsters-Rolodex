import React from 'react';

// Importing the css file with the grid system
import './card-list.styles.css';

//importing the card component
import { Card } from '../card/card.component.jsx';

// creating a component for the grid system where the list of names will be rendered
export const CardList = props => (
    <div className="card-list"> 
          { props.monsters.map(monster => (
              <Card key={monster.id} monster={monster} />
          )) }
    </div>
);
    






 /* map allows us to iterate through the monsters array using the function inside of map(), this function must first state the target (here each monster object) then we can write the fn + each html element that is being generated should have unique key hence the ID property in the monsters array
          // Note that this.props.monsters is linked to monsters (with an 's') while the function inside of map refers to each individual monster (without the 's') -> A good rule of thumb as to when to use the key attribute is this: Anytime you use the map() function inside of render, or you have a list of the same jsx elements one after another, they need a key attribute.  */
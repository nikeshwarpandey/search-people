import React from 'react';
import './card-styles.css';

const Card = props => (
    <div key={props.monster.id} className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2`} />
        <h2> {props.monster.name}</h2>
        <p2>{props.monster.email}</p2>
    </div>
);

export default Card;

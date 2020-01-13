import React from 'react'
import { Link } from 'react-router-dom';

const Card = props => {
    return <Link to={`/detail/${props.character.id}`}>
        <img src={props.character.image} alt={props.character.name} />
        <h3>{props.character.name}</h3>
        <p>{props.character.species}</p>
    </Link>


}

export default Card
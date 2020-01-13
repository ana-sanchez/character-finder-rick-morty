import React from 'react'
import { Link } from 'react-router-dom';

const Card = props => {
    return <Link to={`/detail/${props.character.id}`}>
        <img className='wrapper__character--image' src={props.character.image} alt={props.character.name} />
        <h3 className='wrapper__character--name'>{props.character.name}</h3>
        <p className='wrapper__character--specie'>{props.character.species}</p>
    </Link>


}

export default Card
import React from 'react'

const Card = props => {
    return <div>
        <img src={props.character.image} alt={props.character.name} />
        <h3>{props.character.name}</h3>
        <p>{props.character.species}</p>
    </div>
}

export default Card
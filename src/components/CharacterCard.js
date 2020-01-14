import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";



const Card = props => {

    const { character } = props

    return <Link to={`/detail/${character.id}`}>
        <img className='wrapper__character--image' src={character.image} alt={character.name} />
        <h3 className='wrapper__character--name'>{character.name}</h3>
        <p className='wrapper__character--specie'>{character.species}</p>
    </Link>


}

Card.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    species: PropTypes.string
};

export default Card
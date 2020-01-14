import React from 'react'
import Card from './CharacterCard'
import PropTypes from "prop-types";



const List = props => {
    const value = props.value.toLowerCase()
    const { characters } = props

    return <ul className='wrapper__list'>
        {characters
            .filter(item => value === '' || item.name.toLowerCase().includes(value))
            .map(character => {
                return <li key={character.id} className='wrapper__character'>
                    <Card
                        character={character}
                    />
                </li>
            })}
    </ul>


}
List.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.object),
    character: PropTypes.object
};



export default List 
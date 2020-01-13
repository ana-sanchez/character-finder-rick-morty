import React from 'react'
import Card from './CharacterCard'


const List = props => {
    const value = props.value.toLowerCase()

    return <ul className='wrapper__list'>
        {props.characters
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

export default List 
import React from 'react'
import Card from './CharacterCard'


const List = props => {
    const value = props.value.toLowerCase()

    return <ul>
        {props.characters
            .filter(item => value === '' || item.name.toLowerCase().includes(value))
            .map(character => {
                return <li key={character.id}>
                    <Card
                        character={character}
                    />
                </li>
            })}
    </ul>

}

export default List 
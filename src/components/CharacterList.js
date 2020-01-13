import React from 'react'
import Card from './CharacterCard'


const List = props => {

    return <ul>
        {props.characters
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
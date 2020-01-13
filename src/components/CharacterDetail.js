import React from 'react'
import { Link } from 'react-router-dom'


const Details = props => {

    if (props.character === undefined) {
        return <div>Cargando</div>
    } else {
        return <React.Fragment>
            <Link to='/' className="link"> BACK</Link>

            <div className="detail">
                <img className="detail__image" src={props.character.image} alt={props.character.name}></img>
                <div className="detail__assets" >
                    <p className="detail__assets--title">{props.character.name}</p>
                    <p className="detail__assets--status">Status:  {props.character.status}</p>
                    <p className="detail__assets--specie">Specie: {props.character.specie}</p>
                    <p className="detail__assets--episode">Nº episodes:  {props.character.episode.length}</p>
                    <p className="detail__assets--origin">Origin: {props.character.origin.name}</p>
                </div>
            </div>

        </React.Fragment>

    }


}

export default Details


import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '@material-ui/core/Icon';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import PropTypes from 'prop-types';




const Details = props => {

    const { character } = props

    if (character === undefined) {
        return <div>Cargando...</div>
    } else {
        return <div className='wrapper'>
            <Link to='/' className="link"><ArrowLeftIcon style={{ fontSize: 15 }}></ArrowLeftIcon> BACK </Link>
            <div className="detail">
                <img className="detail__image" src={character.image} alt={character.name}></img>
                <div className="detail__assets" >
                    <p className="detail__assets--title">{character.name}</p>
                    <p className="detail__assets--status">
                        <span className='detail__assets--subtitle'>Status:  </span>
                        {character.status === 'Alive' ? <Icon style={{ fontSize: 15 }}>favorite</Icon> : character.status === 'Dead' ? <Icon style={{ fontSize: 15 }}>highlight_off</Icon> :
                            <NotListedLocationIcon style={{ fontSize: 9 }}></NotListedLocationIcon>}</p>
                    <p className="detail__assets--specie"><span className='detail__assets--subtitle'>Specie:</span> {character.species === 'Human' ? <Icon style={{ fontSize: 15 }}>person</Icon> : <Icon style={{ fontSize: 15 }}>adb</Icon>}</p>
                    <p className="detail__assets--episode"><span className='detail__assets--subtitle'>Nº episodes:</span> {character.episode.length}</p>
                    <p className="detail__assets--origin"><span className='detail__assets--subtitle'>Origin:</span> {character.origin.name}</p>

                </div>
            </div>
        </div>
    }
}


Details.propTypes = {
    character: PropTypes.object,
    name: PropTypes.string,
    species: PropTypes.string,
    status: PropTypes.string,
    origin: PropTypes.string,
    episode: PropTypes.string,
}


export default Details


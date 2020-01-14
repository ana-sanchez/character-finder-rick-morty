import React from 'react'
import List from './CharacterList'
import Filter from './Filters'
import Header from './Header'
import '../styles/App.scss'

const Home = props => {

    const { onClickHandler, value, characters } = props

    return <React.Fragment>      
        <Header />
        <Filter onClickHandler={onClickHandler} />
        <List characters={characters} value={value} />
    </React.Fragment>
}

export default Home
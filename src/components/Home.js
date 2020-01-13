import React from 'react'
import List from './CharacterList'
import Filter from './Filters'
import Header from './Header'
import '../styles/App.scss'

const Home = props => {

    return <React.Fragment>
        <Header />
        <Filter onClickHandler={props.onClickHandler} />
        <List characters={props.characters} value={props.value} />


    </React.Fragment>
}

export default Home
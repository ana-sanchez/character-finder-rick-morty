import React from 'react';
import '../styles/App.scss';
import { fetchCharacter } from '../services/Api'
import Details from './CharacterDetail'
import Home from './Home'
import Header from './Header'
import { Route, Switch } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      value: ''
    }

    this.renderHome = this.renderHome.bind(this)
    this.renderDetail = this.renderDetail.bind(this)
    this.onClickHandler = this.onClickHandler.bind(this)
  }
  onClickHandler(value) {
    this.setState({ value: value })
  }

  componentDidMount() {
    fetchCharacter()
      .then(data => {
        this.setState({ characters: data.results })
      })
  }

  renderHome() {
    return <div>
      <Home
        onClickHandler={this.onClickHandler}
        characters={this.state.characters}
        value={this.state.value}
      />
    </div>

  }

  renderDetail(props) {
    const selectId = parseInt(props.match.params.id);
    let selectCharacter;
    for (const character of this.state.characters) {
      if (character.id === selectId) {
        selectCharacter = character
      }
    }
    return <div>
      <Header />
      <Details character={selectCharacter} />

    </div>

  }

  render() {
    console.log(this.state)
    return (
      <div className="main stars clouds">

        <Switch>
          <Route exact path='/' render={this.renderHome} />
          <Route path='/detail/:id' render={this.renderDetail} />

        </Switch>

      </div>
    );
  }
}

export default App;

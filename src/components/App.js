import React from 'react';
import '../styles/App.css';
import { fetchCharacter } from '../services/Api'
import List from './CharacterList'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    }
  }


  componentDidMount() {
    fetchCharacter()
      .then(data => {
        this.setState({ characters: data.results })
      })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        hola
        <List
          characters={this.state.characters} />
      </div>
    );
  }
}

export default App;

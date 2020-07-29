import React, { Component } from 'react';
import Marvel from '../Marvel/Marvel'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      marvelData: [],
      DCData: [],

    }
  }

  setMarvelData = (character)=>{
    this.setState({marvelData: [...this.state.marvelData, character]});
  }
  render() {
    return (
      <div>
        <Marvel setMarvelData={this.setMarvelData}/>
      </div>
    );
  }
}

export default App;
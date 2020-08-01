import React, { Component } from 'react';
import './App.css'
import Marvel from '../Marvel/Marvel';
import DC from '../DC/DC'
import Home from '../Home/Home';
import MarvelDisplay from '../Marvel/MarvelDisplay'
import DCDisplay from '../DC/DCDisplay'
import Header from '../Header/Header'
import { Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			marvelCharacters: [],
      dcCharacters: [],
      allCharacters: []
		};
	}

	setMarvelData = (character) => {
		this.setState({
			marvelCharacters: [...this.state.marvelCharacters, character]
		});
	};
	setDCData = (character) => {
		this.setState({
			dcCharacters: [...this.state.dcCharacters, character],
		
		});
  };
  
	render() {
    
		return (
			<Container>
				<Header />
				<main>
					<Switch>
						<Route path='/' exact component={Home} />
						<Route
							path='/marvel-comics'
							render={() => {
								return (
									<Marvel
										setMarvelData={this.setMarvelData}
										characters={this.state.marvelCharacters}
									/>
								);
							}}
						/>
						<Route
							path='/marvel-characters/:name'
							render={(routerProps) => {
								return (
									<MarvelDisplay
										match={routerProps.match}
										characters={this.state.marvelCharacters}
									/>
								);
							}}
						/>
						<Route
							path='/dc-comics'
							render={() => {
								return (
									<DC
										setDCData={this.setDCData}
										characters={this.state.dcCharacters}
									/>
								);
							}}
						/>
						<Route
							path='/dc-characters/:name'
							render={(routerProps) => {
								return (
									<DCDisplay
										match={routerProps.match}
										characters={this.state.dcCharacters}
									/>
								);
							}}
						/>
					</Switch>
				</main>
			</Container>
		);
	}
}

export default App;

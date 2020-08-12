import React, { Component } from 'react';
import './App.css'
import Marvel from '../Marvel/Marvel';
import DC from '../DC/DC'
import Home from '../Home/Home';
import MarvelDisplay from '../Marvel/MarvelDisplay'
import DCDisplay from '../DC/DCDisplay'
import Header from '../Header/Header'
import { Redirect, Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import About from '../About/About'
import Footer from '../Footer/Footer'

class App extends Component {
	// Hou comment: No need to pass props into your constructor() and super() since
	// you're not accessing this.props inside the constructor()
	constructor() {
		super();
		this.state = {
			marvelCharacters: [],
      dcCharacters: [],
      allCharacters: []
		};
	}

	setMarvelData = (character) => {
		this.setState({
			// Hou comment: great job with using spread operator to create a shallow copy of state!
			marvelCharacters: [...this.state.marvelCharacters, character]
		});
	};
	setDCData = (character) => {
		this.setState({
			// Hou comment: great job with using spread operator to create a shallow copy of state!
			dcCharacters: [...this.state.dcCharacters, character],
		
		});
  };
  
	render() {
		// Hou comment: you could use destructuring to extract your state into variables at the top of the function, so you don't have to access them repeatedly in this.state
		// const {
		// 	marvelCharacters,
		// 	dcCharacters
		// } = this.state;
		// Then you could do:
		// <Marvel
		//   setMarvelData={this.setMarvelData}
		//   characters={marvelCharacters}
		// />
		// As a follow-up challenge, consider refactoring all your components to use this destructuring pattern.
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
						<Route path='/about' component={About}/>
						<Redirect path='*' to='/'/>
					</Switch>
				</main>
				<Footer/>
			</Container>
		);
	}
}

export default App;

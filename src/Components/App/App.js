import React, { Component } from 'react';
import Marvel from '../Marvel/Marvel';
import DC from '../DC/DC';
import Home from '../Home/Home';
import MarvelDisplay from '../Marvel/MarvelDisplay';
import DCDisplay from '../DC/DCDisplay';
import Header from '../Header/Header';
import { Redirect, Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import About from '../About/About';
import Footer from '../Footer/Footer';

class App extends Component {
	constructor() {
		super();
		this.state = {
			marvelCharacters: [],
			dcCharacters: [],
			allCharacters: [],
		};
	}

	setMarvelData = (character) => {
		this.setState({
			marvelCharacters: [...this.state.marvelCharacters, character],
		});
	};
	setDCData = (character) => {
		this.setState({
			dcCharacters: [...this.state.dcCharacters, character],
		});
	};

	render() {
		const { marvelCharacters, dcCharacters } = this.state;
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
										characters={marvelCharacters}
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
										characters={marvelCharacters}
									/>
								);
							}}
						/>
						<Route
							path='/dc-comics'
							render={() => {
								return (
									<DC setDCData={this.setDCData} characters={dcCharacters} />
								);
							}}
						/>
						<Route
							path='/dc-characters/:name'
							render={(routerProps) => {
								return (
									<DCDisplay
										match={routerProps.match}
										characters={dcCharacters}
									/>
								);
							}}
						/>
						<Route path='/about' component={About} />
						<Redirect path='*' to='/' />
					</Switch>
				</main>
				<Footer />
			</Container>
		);
	}
}

export default App;

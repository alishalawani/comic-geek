import React, { Component } from 'react';
import './App.css'
import Marvel from '../Marvel/Marvel';
import DC from '../DC/DC'
import Home from '../Home/Home';
import MarvelDisplay from '../Marvel/MarvelDisplay'
import DCDisplay from '../DC/DCDisplay'
import Search from '../Search/Search'
import { Route, Link } from 'react-router-dom';

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
			<div>
				<header className='header'>
					<img src='' alt='Logo' />
					<Link to='/'>Home</Link>
					<Link to='/marvel-comics'>Marvel Comics</Link>
					<Link to='/dc-comics'>DC Comics</Link>
					<Link to='/about'>About</Link>
				</header>
        
<Route path='/' exact component={Home}/>
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
			</div>
		);
	}
}

export default App;

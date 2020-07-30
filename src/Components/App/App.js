import React, { Component } from 'react';
import Marvel from '../Marvel/Marvel';
import Header from '../Header/Header';
import { Route } from 'react-router-dom';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			marvelCharacters: [],
			DCCharacters: [],
		};
	}

	setMarvelData = (character) => {
		this.setState({
			marvelCharacters: [...this.state.marvelCharacters, character],
		});
	};
	render() {
		return (
			<div>
				<header>
					<Header />
				</header>
       
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
			</div>
		);
	}
}

export default App;

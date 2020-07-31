import React, { Component } from 'react';
import CardColumns from 'react-bootstrap/CardColumns'
import SearchDisplay from './SearchDisplay'
let found = false
class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: '',
            submitted: false,
		};
	}

	handleInputChange = (event) => {
		this.setState({ search: event.target.value, submitted: false });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ submitted: true });
	};

	render() {
		let characterDisplay;
		if (this.state.submitted === true) {
			let filteredCharacters = this.props.characters.filter((character) => {
				if (
					character.name
						.toLowerCase()
						.indexOf(this.state.search.toLowerCase()) !== -1 &&
					this.state.search &&
					character.name.toLowerCase().charAt(0) ===
						this.state.search.toLowerCase().charAt(0)
				) {
                    found = true
                    
				}
				return (
					character.name
						.toLowerCase()
						.indexOf(this.state.search.toLowerCase()) !== -1 &&
					this.state.search &&
					character.name.toLowerCase().charAt(0) ===
						this.state.search.toLowerCase().charAt(0)
				);
			});

			characterDisplay = filteredCharacters.map((character, index) => {
				if (character.biography.publisher === 'DC Comics') {
					return (
						<SearchDisplay link={`/dc-characters/:${character.name}`} character={character}key={index}/>
						
					);
				} else if (character.biography.publisher === 'Marvel Comics') {
					return (
						<SearchDisplay link={`/marvel-characters/:${character.name}`} character={character} key={index}/>
					);
				}
			});
		}

		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>Search Our Collection: </label>
					<input
						type='text'
						id='search'
						value={this.state.search}
						onChange={this.handleInputChange}></input>
					<button type='submit'>Search</button>
				</form>
				{this.state.submitted && <h2>Your Search result:</h2>}
				{found === false && this.state.submitted && (
					<h3 className='search-error'>
						Sorry, the character you are searched for isn't available, check if
						you typed the name correctly or try searching for a different
						character{' '}
					</h3>
				)}
				<CardColumns>{characterDisplay}</CardColumns>
			</div>
		);
	}
}

export default Search;

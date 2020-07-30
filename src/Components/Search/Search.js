import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    
    handleSubmit = (event) =>{
event.preventDefault();
this.setState({submitted: true})


    }

	render() {
let characterDisplay;
        if(this.state.submitted === true){
		let filteredCharacters = this.props.characters.filter((character) => {
			return character.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 && this.state.search && character.name.toLowerCase().charAt(0) === this.state.search.toLowerCase().charAt(0)
		});
		
		characterDisplay = filteredCharacters.map((character, index) => {
			if (character.biography.publisher === "DC Comics") {
				
					return <Link to={`/dc-characters/:${character.name}`} key={index}>
						<div className='dc-character'>
							<img
								src={character.image.url}
								alt={character.name}
								className='dc-char'
							/>
							<h3>{character.name}</h3>
						</div>
					</Link>
			
            } 
            if (character.biography.publisher === 'Marvel Comics') {
				
					return <Link to={`/marvel-characters/:${character.name}`} key={index}>
						<div className='dc-character'>
							<img
								src={character.image.url}
								alt={character.name}
								className='dc-char'
							/>
							<h3>{character.name}</h3>
						</div>
					</Link>
				
			}
		});}

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
                {characterDisplay}
			</div>
		);
	}
}

export default Search;

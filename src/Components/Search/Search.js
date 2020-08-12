import React, { Component } from 'react';
// Hou comment: I'm noticing that semi-colons are used in some places and not in others. Try to pick a convention and stick with it throughout your codebase.
import CardColumns from 'react-bootstrap/CardColumns'
import SearchDisplay from './SearchDisplay'
// Hou comment: Nice job using react-bootstrap in your project! Your design looks really elegant thanks to it.
import { Form, Row, Col, Button } from 'react-bootstrap';
import './Search.css'
// Hou comment: you can store `found` variable in the Search state 
let found = false
class Search extends Component {
	// Hou comment: No need to pass props into your constructor() and super() since
	// you're not accessing this.props inside the constructor()
	constructor(props) {
		super(props);
		this.state = {
			search: '',
      submitted: false,
		};
	}

	handleInputChange = (event) => {
		this.setState({ search: event.target.value, submitted: false });
		found = false;
	};

	handleSubmit = (event) => {
		event.preventDefault();
    this.setState({ submitted: true });
	};

	render() {
		// Hou comment: fix indentation issues below
		let characterDisplay;
		let filteredCharacters; 
		if (this.state.submitted) {
			filteredCharacters = this.props.characters.filter((character) => {
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
				// Hou comment: could you break up line 60 into separate lines for better readability?
				return  (character.biography.publisher === 'DC Comics') ? <SearchDisplay link={`/dc-characters/:${character.name}`} character={character}key={index}/> : <SearchDisplay link={`/marvel-characters/:${character.name}`} character={character} key={index}/>;
			});
		}
		// Hou comment: I'm noticing there's some code formatting issues below - make sure to indent your code properly for better readability!
		return (
			<div>
				<Form onSubmit={this.handleSubmit}>
					<Row>
						<Col>
                        <Form.Group>
							<Form.Control size='sm' placeholder='Search by character name' type='text' name='searchString' onChange={this.handleInputChange} value={this.state.search}/>
						
							</Form.Group>
                            <Form.Text className='text-muted'>
                                Search by character name or first letter of character in this group
                            </Form.Text>
							
						</Col>
                        <Col md='auto'>
                        <Button type='submit' variant='dark' className='btn-sm btn'>
                            Search
                        </Button>
                        </Col>
					</Row>
				</Form>
				{(found && this.state.search && this.state.submitted) && <h2>Your Search result:</h2>}
				{(!found && this.state.submitted && this.state.search)&& (
					<p className='search-error'>
						Sorry, the character you are searched for isn't available, check if
						you typed the name correctly or try searching for a different
						character{' '}
					</p>
				)}
				<CardColumns>{characterDisplay}</CardColumns>
			</div>
		);
	}
}

export default Search;

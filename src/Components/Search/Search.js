import React, { Component } from 'react';
import CardColumns from 'react-bootstrap/CardColumns'
import SearchDisplay from './SearchDisplay'
import { Form, Row, Col, Button } from 'react-bootstrap';
import './Search.css'
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
        let filteredCharacters 
		if (this.state.submitted === true) {
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
                    
				}else{
                    
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
				<Form onSubmit={this.handleSubmit}>
					<Row>
						<Col>
                        <Form.Group>
							<Form.Control size='sm' placeholder='Search by character name' type='text' name='searchString' onChange={this.handleInputChange} value={this.state.search}/>
						
							</Form.Group>
                            <Form.Text className='text-muted'>
                                Search by any character name in this group
                            </Form.Text>
						</Col>
                        <Col md='auto'>
                        <Button type='submit' variant='dark' className='btn-sm btn'>
                            Search
                        </Button>
                        </Col>
					</Row>
				</Form>
				{this.state.search && <h2>Your Search result:</h2>}
				{(found === false && this.state.submitted && this.state.search)&& (
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

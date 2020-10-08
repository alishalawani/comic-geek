import React, { useState } from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import SearchDisplay from './SearchDisplay';
import { Form, Row, Col, Button } from 'react-bootstrap';
import './Search.css';

function Search({ characters }) {
	const [properties, setProperties] = useState({
		search: '',
		submitted: false,
	});
	let found = false
	const handleInputChange = (event) => {
		setProperties({
			search: event.target.value,
			submitted: false,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setProperties({
			search: properties.search,
			submitted: true,
		});
	};

	let characterDisplay;
	let filteredCharacters;
	if (properties.submitted === true) {
		filteredCharacters = characters.filter((character) => {
			if (
				character.name
					.toLowerCase()
					.indexOf(properties.search.toLowerCase()) !== -1 &&
				properties.search &&
				character.name.toLowerCase().charAt(0) ===
					properties.search.toLowerCase().charAt(0)
			) {
				found = true
			}
			return (
				character.name
					.toLowerCase()
					.indexOf(properties.search.toLowerCase()) !== -1 &&
				properties.search &&
				character.name.toLowerCase().charAt(0) ===
					properties.search.toLowerCase().charAt(0)
			);
		});
		
		characterDisplay = filteredCharacters.map((character, index) => {
			return character.biography.publisher === 'DC Comics' ? (
				<SearchDisplay
					link={`/dc-characters/:${character.name}`}
					character={character}
					key={index}
				/>
			) : (
				<SearchDisplay
					link={`/marvel-characters/:${character.name}`}
					character={character}
					key={index}
				/>
			);
		});
	}

	return (
		<div>
			<Form onSubmit={handleSubmit}>
				<Row>
					<Col>
						<Form.Group>
							<Form.Control
								size='sm'
								placeholder='Search by character name'
								type='text'
								name='searchString'
								onChange={handleInputChange}
								value={properties.search}
							/>
						</Form.Group>
						<Form.Text className='text-muted'>
							Search by character name or first letter of character in this
							group
						</Form.Text>
					</Col>
					<Col md='auto'>
						<Button type='submit' variant='dark' className='btn-sm btn'>
							Search
						</Button>
					</Col>
				</Row>
			</Form>
			{found && properties.search && properties.submitted && (
				<h2>Your Search result:</h2>
			)}
			{!found && properties.submitted && properties.search && (
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

export default Search;

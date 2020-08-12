import React, { Component } from 'react';
import './MarvelDisplay.css';
import { Container} from 'react-bootstrap';

// Hou comment: can we use a functional component instead of a class component here?
class MarvelDisplay extends Component {
	render() {
		let characterInfo;
		this.props.characters.forEach((character) => {
			if (`:${character.name}` === this.props.match.params.name) {
				characterInfo = (
					<div className='marvel-container'>
						<div className='profile'>
							<h1 className='marvel-char-name'>{character.name}</h1>
							<img
								src={character.image.url}
								alt={character.name}
								className='marvel-image'
							/>
						</div>
						<div className='info'>
							<h2 className='bio'>Biography</h2>
							<p className='name'>
								<span className='full-name'>Full Name:</span>{' '}
								{character.biography['full-name']}
							</p>
							<h5 className='bio'>Alias(es)</h5>
							<ul>
								{character.biography.aliases.map((alias, index) => {
									return <li key={index}>{alias}</li>;
								})}
							</ul>
							<p>
								<span className='bio'>Place of Birth:</span>{' '}
								{character.biography['place-of-birth']}
							</p>
							<p>
								<span className='bio'>Alter Ego(s):</span>{' '}
								{character.biography['alter-egos']}
							</p>
							<h3>Appearance:</h3>
							<p>Height: {character.appearance.height[0]}</p>
							<p>Gender: {character.appearance.gender}</p>
							<p>Eye color: {character.appearance['eye-color']}</p>
							<p>Hair Color: {character.appearance['hair-color']}</p>
							<h3>Power Stats:</h3>
							<p>Combat: {character.powerstats.combat}</p>
							<p>Durability: {character.powerstats.durability}</p>
							<p>
								<span className='occupation'>Occupation:</span>{' '}
								{character.work.occupation}
							</p>
						</div>
					</div>
				);
			}
		});

		return (
			<Container className='main-marvel-container'>
				<hr className='hr-marvel-display' />
				{characterInfo}
			</Container>
		);
	}
}

export default MarvelDisplay;

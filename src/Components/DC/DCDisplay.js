import React, { Component } from 'react';
import './DCDisplay.css';
import { Container } from 'react-bootstrap';
class DCDisplay extends Component {
	render() {
		let characterInfo;
		this.props.characters.forEach((character) => {
			if (`:${character.name}` === this.props.match.params.name) {
				characterInfo = (
					<div className='dc-container'>
						<div className='dc-profile'>
							<h1 className='dc-char-name'>{character.name}</h1>

							<img
								src={character.image.url}
								alt={character.name}
								className='dc-image'
							/>
						</div>
						<div className='dc-info'>
							<h2 className='dc-bio'>Biography</h2>
							<p className='dc-name'>
								<span className='dc-full-name'>Full Name:</span>{' '}
								{character.biography['full-name']}
							</p>
							<h5 className='dc-bio'>Alias(es)</h5>
							<ul>
								{character.biography.aliases.map((alias, index) => {
									return <li key={index}>{alias}</li>;
								})}
							</ul>
							<p>
								<span className='dc-bio'>Place of Birth:</span>{' '}
								{character.biography['place-of-birth']}
							</p>
							<p>
								<span className='dc-bio'>Alter Ego(s):</span>{' '}
								{character.biography['alter-egos']}
							</p>
							<h3>Appearance:</h3>
							<p>Height: {character.appearance.height[0]}</p>
							<p>Gender: {character.appearance.gender}</p>
							<p>Eye color: {character.appearance['dc-eye-color']}</p>
							<p>Hair Color: {character.appearance['dc-hair-color']}</p>
							<h3>Power Stats:</h3>
							<p>Combat: {character.powerstats.combat}</p>
							<p>Durability: {character.powerstats.durability}</p>
							<p>
								<span className='dc-occupation'>Occupation:</span>{' '}
								{character.work.occupation}
							</p>
						</div>
					</div>
				);
			}
		});

		return (
			<Container className='main-dc-container'>
				<hr className='hr-dc-display' />
				{characterInfo}
			</Container>
		);
	}
}

export default DCDisplay;

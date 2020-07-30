import React, { Component } from 'react';
import './DCDisplay.css'
class DCDisplay extends Component {
	render() {
		let characterInfo;
		this.props.characters.forEach((character) => {
			// console.log("param name-" + this.props.match.params.name);
			// console.log("character name -" + character1.name);
			if (`:${character.name}` === this.props.match.params.name) {
				characterInfo = (
					<div>
						<h1>{character.name}</h1>
						<img
							src={character.image.url}
							alt={character.name}
							className='dc-image'
						/>
						<div className='biography'>
							<h2>Biography:</h2>
							<p>
								<span className='full-name'>Full Name:</span>{' '}
								{character.biography['full-name']}
							</p>
							<h3>Alias(es)</h3>
							<ul>
								{character.biography.aliases.map((alias, index) => {
									return <li key={index}>{alias}</li>;
								})}
							</ul>
							<h4>Place of Birth: {character.biography['place-of-birth']}</h4>
							<h4>Alter Ego(s)</h4>
							<p>{character.biography['alter-egos']}</p>
							<h2>Appearance</h2>
							<p>Height: {character.appearance.height[0]}</p>
							<p>Gender: {character.appearance.gender}</p>
							<p>Eye color: {character.appearance['eye-color']}</p>
							<p>Hair Color: {character.appearance['hair-color']}</p>
							<h3>Power Stats:</h3>
							<p>Combat: {character.powerstats.combat}</p>
							<p>Durability: {character.powerstats.durability}</p>
							<p>Occupation: {character.work.occupation}</p>
						</div>
					</div>
				);
			}
		});

		return <div>{characterInfo}</div>;
	}
}

export default DCDisplay;
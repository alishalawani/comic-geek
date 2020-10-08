import React from 'react';
import './MarvelDisplay.css';
import { Container } from 'react-bootstrap';
function MarvelDisplay(props) {
	let characterInfo;
	this.props.characters.forEach((character) => {
		const { name, image, appearance, powerstats, work, biography } = character;
		if (`:${character.name}` === this.props.match.params.name) {
			characterInfo = (
				<div className='marvel-container'>
					<div className='profile'>
						<h1 className='marvel-char-name'>{name}</h1>

						<img
							src={image.url}
							alt={name}
							className='marvel-image'
						/>
					</div>
					<div className='info'>
						<h2 className='bio'>Biography</h2>
						<p className='name'>
							<span className='full-name'>Full Name:</span>{' '}
							{biography['full-name']}
						</p>
						<h5 className='bio'>Alias(es)</h5>
						<ul>
							{biography.aliases.map((alias, index) => {
								return <li key={index}>{alias}</li>;
							})}
						</ul>
						<p>
							<span className='bio'>Place of Birth:</span>{' '}
							{biography['place-of-birth']}
						</p>
						<p>
							<span className='bio'>Alter Ego(s):</span>{' '}
							{biography['alter-egos']}
						</p>
						<h3>Appearance:</h3>
						<p>Height: {appearance.height[0]}</p>
						<p>Gender: {appearance.gender}</p>
						<p>Eye color: {appearance['eye-color']}</p>
						<p>Hair Color: {appearance['hair-color']}</p>
						<h3>Power Stats:</h3>
						<p>Combat: {powerstats.combat}</p>
						<p>Durability: {powerstats.durability}</p>
						<p>
							<span className='occupation'>Occupation:</span>{' '}
							{work.occupation}
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

export default MarvelDisplay;

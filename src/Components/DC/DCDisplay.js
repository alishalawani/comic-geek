import React, { Component } from 'react';
import './DCDisplay.css';
import { Container } from 'react-bootstrap';
class DCDisplay extends Component {
	render() {
		let characterInfo;
		this.props.characters.forEach((character) => {
			const {
				name,
				image,
				appearance,
				powerstats,
				work,
				biography,
			} = character;
			if (`:${name}` === this.props.match.params.name) {
				characterInfo = (
					<div className='dc-container'>
						<div className='dc-profile'>
							<h1 className='dc-char-name'>{name}</h1>

							<img src={image.url} alt={name} className='dc-image' />
						</div>
						<div className='dc-info'>
							<h2 className='dc-bio'>Biography</h2>
							<p className='dc-name'>
								<span className='dc-full-name'>Full Name:</span>{' '}
								{biography['full-name']}
							</p>
							<h5 className='dc-bio'>Alias(es)</h5>
							<ul>
								{biography.aliases.map((alias, index) => {
									return <li key={index}>{alias}</li>;
								})}
							</ul>
							<p>
								<span className='dc-bio'>Place of Birth:</span>{' '}
								{biography['place-of-birth']}
							</p>
							<p>
								<span className='dc-bio'>Alter Ego(s):</span>{' '}
								{biography['alter-egos']}
							</p>
							<h3>Appearance:</h3>
							<p>Height: {appearance.height[0]}</p>
							<p>Gender: {appearance.gender}</p>
							<p>Eye color: {appearance['dc-eye-color']}</p>
							<p>Hair Color: {appearance['dc-hair-color']}</p>
							<h3>Power Stats:</h3>
							<p>Combat: {powerstats.combat}</p>
							<p>Durability: {powerstats.durability}</p>
							<p>
								<span className='dc-occupation'>Occupation:</span>{' '}
								{work.occupation}
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

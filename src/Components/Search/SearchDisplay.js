import React from 'react';
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import './SearchDisplay.css'
function SearchDisplay({link, character}) {
    return (
			<Card className='character'>
				<Card.Img
					variant='top'
					src={character.image.url}
					alt={character.name}
					className='char'
				/>
				<Card.Body>
					<Card.Text>{character.name} </Card.Text>

					<Link to={link}>
						<div className='know-more'>Know More</div>
					</Link>
				</Card.Body>
			</Card>
		);
}

export default SearchDisplay;
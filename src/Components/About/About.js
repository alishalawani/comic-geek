import React from 'react';
import { Jumbotron, Image } from 'react-bootstrap';
import './About.css';
function About(props) {
	return (
		<Jumbotron>
			<h1 className='about-heading'>About Comic Geek</h1>
			<div className='about-image-container'>
				<Image
					className='about-image'
					fluid
					src='https://studybreaks.com/wp-content/uploads/2016/09/dc-vs-marvel.jpg'
					alt='Marvel and DC'
				/>
			</div>
			<p className='about-paragraph'>
				Comic Greek is an app where both Marvel and DC comic fans can find fun
				information about different but limited comic characters in both worlds,
				and hopefully this promotes diversity.
			</p>
		</Jumbotron>
	);
}

export default About;

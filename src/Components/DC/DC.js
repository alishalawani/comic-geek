import React, { Component } from 'react';
import dcNames from './dcNames';
import {Link} from 'react-router-dom'
import './DC.css'
import Search from '../Search/Search'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import axios from 'axios'


const apiKey = process.env.REACT_APP_MYAPI_KEY;
let names = [];
class DC extends Component {

    
	componentDidMount() {
		const url = `https://www.superheroapi.com/api.php/${apiKey}/search/`;
		dcNames.map((name) => {
			axios(url + name)
				.then((res) => {
					return res.data.results[0];
				})
				.then((res) => {
					console.log(res);
					//to make sure that the results don't double
					if (!names.includes(res.name)) {
						names.push(res.name);
						this.props.setDCData(res);
					}
				})
				.catch((err) => {
					console.log("Handled error: " + err);
				});
		});
	}
	render() {
		let characters = this.props.characters.map((character, index) => {
			return (
				<Card className='character' key={index}>
					<Card.Img
						variant='top'
						src={character.image.url}
						alt={character.name}
						className='dc-char'
					/>
					<Card.Body>
						<Card.Text>{character.name} </Card.Text>

						<Link to={`/dc-characters/:${character.name}`}>
							<div className='dc-know-more'>Know More</div>
						</Link>
					</Card.Body>
				</Card>
			);
		});

		return (
			<Container>
				<Search characters={this.props.characters} />
				<h1>DC Comics</h1>
				<CardColumns>{characters}</CardColumns>
			</Container>
		);
	}
}
export default DC;
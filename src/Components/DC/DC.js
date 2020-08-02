import React, { Component } from 'react';
import dcNames from './dcNames';
import {Link} from 'react-router-dom'
import './DC.css'
import Search from '../Search/Search'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import axios from 'axios'
import Toast from 'react-bootstrap/Toast'


const apiKey = process.env.REACT_APP_MYAPI_KEY;
let names = [];

let error;
class DC extends Component {

    
	componentDidMount() {
		const url = `https://www.superheroapi.com/api.php/${apiKey}/search/`;
		dcNames.forEach((name) => {
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
					if (err.status === '404') {
						error = (
							<Toast>
								<Toast.Header>
									<img
										src='holder.js/20x20?text=%20'
										className='rounded mr-2'
										alt=''
									/>
									<strong className='mr-auto'>Error</strong>
								</Toast.Header>
								<Toast.Body>Page not found.</Toast.Body>
							</Toast>
						);
					} else {
						error = (
							<Toast>
								<Toast.Header>
									<img
										src='holder.js/20x20?text=%20'
										className='rounded mr-2'
										alt=''
									/>
									<strong className='mr-auto'>Error</strong>
								</Toast.Header>
								<Toast.Body>
									Hey, Comic Geek user, we are experiencing some temporary
									problems on our app, this will be fixed in no time, sorry for
									the inconvenience.
								</Toast.Body>
							</Toast>
						);
					}
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
                <hr className='hr'/>
				<h1>DC Comics</h1>
				<CardColumns>{characters}</CardColumns>
				{error}
			</Container>
		);
	}
}
export default DC;
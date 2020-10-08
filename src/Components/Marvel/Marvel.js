import React, { Component } from 'react';
import './Marvel.css';
import marvelNames from './marvelNames';
import Search from '../Search/Search';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Toast from 'react-bootstrap/Toast';

const apiKey = process.env.REACT_APP_MYAPI_KEY;

class Marvel extends Component {
	constructor(){
		super();
		this.state = {
			names: [],
			error: ''
		}
	};
	componentDidMount() {
		const url = `https://www.superheroapi.com/api.php/${apiKey}/search/`;
		marvelNames.forEach((name) => {
			axios(url + name)
				.then((res) => {
					return res.data.results[0];
				})
				.then((res) => {
					if (!this.state.names.includes(res.name)) {
						this.setState({names: [...this.state.names,res.name], error : this.state.error})
						this.props.setMarvelData(res);
					}
				})
				.catch((err) => {
					if (err.status === '404') {
						this.setState({
							error: (
								<Toast>
									<Toast.Header>
										<img
											src='holder.js/20x20?text=%20'
											className='rounded mr-2'
											alt='invalid character'
										/>
										<strong className='mr-auto'>Error</strong>
									</Toast.Header>
									<Toast.Body>Page not found.</Toast.Body>
								</Toast>
							),
							names: this.state.names,
						});
					} else {
						this.setState({error :(
							<Toast>
								<Toast.Header>
									<img
										src='holder.js/20x20?text=%20'
										className='rounded mr-2'
										alt='invalid character'
									/>
									<strong className='mr-auto'>Error</strong>
								</Toast.Header>
								<Toast.Body>
									Hey, Comic Geek user, this image is currently unavailable,
									this will be fixed in no time, sorry for the inconvenience.
								</Toast.Body>
							</Toast>
						), names: this.state.names})
					}
				});
		});
	}

	handleButtonEvent = (event) => {
		event.preventDefault();
	};
	render() {
		let characters = this.props.characters.map(({ image, name }, index) => {
			return (
				<Card className='character' key={index}>
					<Card.Img
						variant='top'
						src={image.url}
						alt={name}
						className='marvel-char'
					/>
					<Card.Body>
						<Card.Text>{name} </Card.Text>

						<Link to={`/marvel-characters/:${name}`}>
							<button className='marvel-know-more'>Know More</button>
						</Link>
					</Card.Body>
				</Card>
			);
		});

		return (
			<Container>
				<Search characters={this.props.characters} />
				<hr className='hr' />
				<h1>Marvel Comics</h1>
				<CardColumns>{characters}</CardColumns>
				{this.state.error}
			</Container>
		);
	}
}

export default Marvel;

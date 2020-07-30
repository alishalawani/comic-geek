import React, { Component } from 'react';
import dcNames from './dcNames';
import {Link} from 'react-router-dom'
import './DC.css'
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
					console.log(err);
				});
		});
	}
	render() {
		let characters = this.props.characters.map((character, index) => {
			return (
				<Link to={`/dc-characters/:${character.name}`} key={index}>
					{' '}
					<div className='dc-character'>
						<img
							src={character.image.url}
							alt={character.name}
							className='dc-char'
						/>
						<h3>{character.name}</h3>
					</div>
				</Link>
			);
		});

		return <div className='dc-container'>{characters}</div>;
	}
}
export default DC;
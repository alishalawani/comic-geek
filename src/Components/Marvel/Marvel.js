import React, { Component } from 'react';
import './Marvel.css';
import marvelNames from './marvelNames'
import Search from '../Search/Search'
import {Link} from 'react-router-dom'
import axios from 'axios';
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns'


const apiKey = process.env.REACT_APP_MYAPI_KEY;
let names = [];
class Marvel extends Component {


    componentDidMount(){
        const url = `https://www.superheroapi.com/api.php/${apiKey}/search/`;
        marvelNames.map((name)=>{
            axios(url+name).then((res)=>{return res.data.results[0]}).then((res)=>{
                // console.log(res)
                //to make sure that the results don't double
                if(!names.includes(res.name)){
                    names.push(res.name);
                    this.props.setMarvelData(res);
                }
                
                
            }).catch((err)=>{console.log("Handled error: "+err)})
        })
    
    }

    handleButtonEvent = (event) =>{
event.preventDefault();
    }
    render() {
        let characters = this.props.characters.map((character, index)=>{
            return (
							<Card className='character' key={index}>
								<Card.Img
                                variant='top'
									src={character.image.url}
									alt={character.name}
									className='marvel-char'
								/>
								<Card.Body>
									<Card.Text>{character.name} </Card.Text>
									
										<Link to={`/marvel-characters/:${character.name}`}>
											<div className='marvel-know-more'>Know More</div>
										</Link>
									
								</Card.Body>
							</Card>
						);
        })

        return (
					<Container>
						<Search characters={this.props.characters} />
                        <hr className='hr'/>
						<h1>Marvel Comics</h1>
						<CardColumns >{characters}</CardColumns>
					</Container>
				);
    }
}

export default Marvel;
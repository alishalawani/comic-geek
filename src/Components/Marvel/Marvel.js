import React, { Component } from 'react';
import './Marvel.css';
import marvelNames from './marvelNames'
import {Link} from 'react-router-dom'
import axios from 'axios';


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
    render() {
        let characters = this.props.characters.map((character, index)=>{
            return (
							<Link to={`/marvel-characters/:${character.name}`} key={index}>
								{' '}
								<div className='character'>
									<img
										src={character.image.url}
										alt={character.name}
										className='marvel-char'
									/>
									<h3>{character.name}</h3>
								</div>
							</Link>
						);
        })

        return (
            <div className='container'>
                {characters}
            </div>
        );
    }
}

export default Marvel;
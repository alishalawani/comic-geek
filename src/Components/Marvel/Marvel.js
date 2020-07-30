import React, { Component } from 'react';
import './Marvel.css';
import marvelNames from './marvelNames'
import axios from 'axios';


const apiKey = process.env.REACT_APP_MYAPI_KEY;

class Marvel extends Component {


    componentDidMount(){
        const url = `https://www.superheroapi.com/api.php/${apiKey}/search/`;
        marvelNames.map((name)=>{
            axios(url+name).then((res)=>{return res.data.results[0]}).then((res)=>{
                console.log(res)
                this.props.setMarvelData(res);
            }).catch((err)=>{console.log(err)})
        })
    
    }
    render() {
        let characters = this.props.characters.map((character)=>{
            return (
							<div key={character.id} className='character'>
								<img src={character.image.url} alt={character.name} className='marvel-char'/>
								<h3>{character.name}</h3>
							</div>
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
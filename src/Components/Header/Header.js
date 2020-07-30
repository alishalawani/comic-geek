import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

function Header(props) {
    return (
			<div className='head'>
				<img src='' alt='Logo' />
				<Link to='/'>Home</Link>
				<Link to='/marvel-comics'>Marvel Comics</Link>
				<Link to='/dc-comics'>DC Comics</Link>
                <Link to='/about'>About</Link>
			</div>
		);
}

export default Header;
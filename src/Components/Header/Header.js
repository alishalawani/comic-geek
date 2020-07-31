import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import {LinkContainer} from 'react-router-bootstrap';
function Header(props) {
    return (
			<Navbar
				className='color-nav'
				collapseOnSelect
				variant='light'
				expand='md'>
				<LinkContainer to='/'>
					{/* <link rel='icon' href='/image/favicon.ico' /> */}
					<Navbar.Brand>Comic Geek</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav>
						<LinkContainer to='/'><Nav.Link>Home</Nav.Link></LinkContainer>
						<LinkContainer to='/marvel-comics'><Nav.Link>Marvel Comics</Nav.Link></LinkContainer>
						<LinkContainer to='/dc-comics'><Nav.Link>DC Comics</Nav.Link></LinkContainer>
						<LinkContainer to='/about'><Nav.Link>About</Nav.Link></LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
}

export default Header;
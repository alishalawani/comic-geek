import React from 'react';
import { Container } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './Footer.css'
function Footer(props) {
    return (
			<Container className='footer-container' style={{ margin: '0 0 7px 0' }}>
				<footer className='footer'>
					<div>
						{' '}
						<span>
							&copy; 2020{' '}
							<Link to='/' className='comic-geek'>
								Comic Geek{' '}
							</Link>{' '}
							By
							<img
								src='https://i.imgur.com/BO1FpTO.png'
								alt='lisha-logo'
								className='lisha-logo'
							/>
						</span>
					</div>
					<div>
						<span>Powered by </span>
						<Link to='/' className='comic-geek'>
							Comic Geek
						</Link>
					</div>
				</footer>
			</Container>
		);
}

export default Footer;
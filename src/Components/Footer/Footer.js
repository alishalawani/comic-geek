import React from 'react';
import {Link} from 'react-router-dom'
import './Footer.css'
function Footer() {
    return (
				<footer className='footer'>
					<div className='top-line'>
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
					<div >
						<span>Powered by </span>
						<Link to='/' className='comic-geek'>
							Comic Geek
						</Link>
					</div>
				</footer>
		);
}

export default Footer;
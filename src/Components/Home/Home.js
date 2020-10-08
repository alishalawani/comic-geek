import React from 'react';
import './Home.css'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import { Carousel } from 'react-bootstrap';
import {Link} from 'react-router-dom'

function Home(props) {
    return (
			<Container className='home-container'>
				<Carousel className='carousel-js'>
					<Carousel.Item className='carousel-js'>
						<Image
							fluid
							className='home-image'
							src='https://www.dccomics.com/sites/default/files/dc_GalleryComics_1920x1080_20180606__JL01_cover_600_CMYK_2_5b1871e5870257.07705170.jpg'
							alt='dc'
						/>
					</Carousel.Item>
					<Carousel.Item className='carousel-js'>
						<Image
							fluid
							className='home-image'
							src='https://mashfeed.files.wordpress.com/2015/11/spider-man-marvel-logo.jpg'
							alt='Marvel'
						/>
					</Carousel.Item>
				</Carousel>
				<Container className='home-links'>
					<div className='marvel-link-container'>
						<Link to='/marvel-comics'>
							<Image
								className='marvel-link'
								src='https://user-images.githubusercontent.com/64725210/95506586-b3f60300-0975-11eb-96ed-46a803d79f50.jpg'
								alt='marvel'
							/>
						</Link>
					</div>

					<div className='dc-link-container'>
						<Link to='/dc-comics'>
							<Image
								className='dc-link'
								src='https://user-images.githubusercontent.com/64725210/95506516-9cb71580-0975-11eb-9992-8d8eeb8839e6.jpg'
								alt='dc'
							/>
						</Link>
					</div>
				</Container>
			</Container>
		);
}

export default Home;
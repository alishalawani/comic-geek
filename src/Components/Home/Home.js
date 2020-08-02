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
					<Carousel.Item>
						<Image
							fluid
							className='home-image'
							src='https://www.dccomics.com/sites/default/files/dc_GalleryComics_1920x1080_20180606__JL01_cover_600_CMYK_2_5b1871e5870257.07705170.jpg'
							alt='dc'
						/>
					</Carousel.Item>
					<Carousel.Item>
						<Image
							fluid
							className='home-image'
							src='https://mashfeed.files.wordpress.com/2015/11/spider-man-marvel-logo.jpg'
							alt='Marvel'
						/>
					</Carousel.Item>
					<Carousel.Item>
						<Image
							fluid
							className='home-image'
							src='https://www.wallpaperup.com/uploads/wallpapers/2014/04/29/345381/815a44cc03df4b998281e5d7dd272d6b.jpg'
							alt='dc'
						/>
					</Carousel.Item>
				</Carousel>
				<Container className='home-links'>
					<div className='marvel-link-container'>
						<Link to='/marvel-comics'>
							<img
								className='marvel-link'
								src='https://www.oyunbufem.com/image/cache/catalog/Oyunlar/PS4/marvel-s-spider-man-1000x1000.jpg'
								alt='marvel'
							/>
						</Link>
						
					</div>

					<div className='dc-link-container'>
						<Link to='/dc-comics'>
							<img
								className='dc-link'
								src='https://1870mag.com/wp-content/uploads/dc-comics-logo-2016.jpg'
								alt='dc'
							/>
						</Link>
					</div>
				</Container>
			</Container>
		);
}

export default Home;
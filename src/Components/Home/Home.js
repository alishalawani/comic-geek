import React from 'react';
import './Home.css'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'

import { CardColumns, Card, Row, Col } from 'react-bootstrap';

function Home(props) {
    return (
			<Container>
				<Image
					fluid
					src='https://studybreaks.com/wp-content/uploads/2016/09/dc-vs-marvel.jpg'
					alt='Marvel and DC'
				/>

				<Row>
					<Col>
					
						<Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYNp9w-Vdj1uCg9vvIJ_2FGrJEdBzzMm6qeQ&usqp=CAU' />
					</Col>
					<Col md='auto'>
						<Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYNp9w-Vdj1uCg9vvIJ_2FGrJEdBzzMm6qeQ&usqp=CAU' className='home-img'/>
					</Col>
				</Row>
			</Container>
		);
}

export default Home;
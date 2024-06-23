import React from 'react';
import '../css/overview.css';
import photo from '../assets/photo.jpg';

const Overview = () => {

	return (
		<section className='overview' id='overview'>
			<div className='content'>
				<img src={photo} alt="Faris Hasan" />
				<div className='text'>
					<h1>Faris Hasan</h1>
					<h3>Full Stack Web Developer</h3>
					<p>Self-learned full stack web developer with training from Binar Academy Bootcamp, graduated in June 2024. I'd like to build web app with JavaScript language.</p>
				</div>
			</div>
		</section>
	);
};

export default Overview;

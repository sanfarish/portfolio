import React from 'react';
import '../css/skills.css';
import javascript from '../assets/javascript-plain.svg';
import nodejs from '../assets/nodejs-plain-wordmark.svg';
import express from '../assets/express-original.svg';
import postgresql from '../assets/postgresql-plain.svg';
import react from '../assets/react-original.svg';
import html5 from '../assets/html5-plain.svg';
import css3 from '../assets/css3-plain.svg';
import github from '../assets/github-original.svg';
import Skill from './Skill';

const Skills = () => {

	const width = '100px';

	return (
		<section className='skills' id='skills'>
			<div className='content'>
				<h1>Skills</h1>
				<p>With JavaScript language as my experience, I tend to work with JavaScript based stack such as Node.js as server environment, Express.js for API framework and React.js as frontend user interface. I also learnt HTML5 as web structure and CSS for styling purposes. I used to work with PostgreSQL for RDBMS (Database). I also have experience with Git and Github.</p>
				<div className='skill'>
					<Skill img={javascript} caption='Javascript' />
					<Skill img={nodejs} caption='Node.js' />
					<Skill img={express} caption='Express.js' />
					<Skill img={postgresql} caption='PostgreSQL' />
					<Skill img={react} caption='React.js' />
					<Skill img={html5} caption='HTML5' />
					<Skill img={css3} caption='CSS3' />
					<Skill img={github} caption='Git/Github' />
				</div>
			</div>
		</section>
	);
};

export default Skills;

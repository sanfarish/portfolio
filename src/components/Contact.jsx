import React from 'react';
import '../css/contact.css';
import email from '../assets/envelope-regular.svg';
import linkedin from '../assets/LI-In-Bug.png';
import github from '../assets/github-mark.png';

const Contact = () => {

	return (
		<section className='contact'>
			<h1>Contact</h1>
			<a href="mailto:farisfalah@gmail.com">
				<img src={email} alt="email" width='50px' />
			</a>
			<a href="https://www.linkedin.com/in/sanfarish">
				<img src={linkedin} alt="linkedin" width='50px' />
			</a>
			<a href="https://github.com/sanfarish">
				<img src={github} alt="github" width='50px' />
			</a>
		</section>
	);
};

export default Contact;

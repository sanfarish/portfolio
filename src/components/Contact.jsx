import React from 'react';
import '../css/contact.css';
import email from '../assets/envelope-regular.svg';
import linkedin from '../assets/LI-In-Bug.png';
import github from '../assets/github-mark.png';

const Contact = () => {

	return (
		<section className='contact' id='contact'>
			<div className='content'>
				<h1>Contact</h1>
				<div className='list'>
					<a href="mailto:farisfalah@gmail.com">
						<figure>
							<img src={email} alt="email" />
							<figcaption>E-Mail</figcaption>
						</figure>
					</a>
					<a href="https://www.linkedin.com/in/sanfarish">
						<figure>
							<img src={linkedin} alt="linkedin" />
							<figcaption>Linkedin</figcaption>
						</figure>
					</a>
					<a href="https://github.com/sanfarish">
						<figure>
							<img src={github} alt="github" />
							<figcaption>GitHub</figcaption>
						</figure>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Contact;

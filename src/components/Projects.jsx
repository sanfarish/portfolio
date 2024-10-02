import React from 'react';
import '../css/projects.css';
import expmgr from '../assets/expense-manager.png';

const Projects = () => {

	return (
		<section className='projects' id='projects'>
			<div className='content'>
				<h1>Projects</h1>
				<div className='project'>
					<img src={expmgr} alt="Expense Manager" />
					<div className='text'>
						<h1>Expense Manager</h1>
						<h3>Full Stack Project</h3>
						<p>
							A responsive web-app to manage personal expenses using React and Node.js within 5 months. Consist of 5 pages with REST API server: login, register, transactions, accounts, categories.
							<br />
							<a href="https://expensemanager.farishasan.web.id">Expense Manager Website</a>
							<br />
							<a href="https://github.com/sanfarish/expense-manager-app">GitHub Repository</a>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;

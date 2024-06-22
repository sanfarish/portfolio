import React, { useState } from 'react';
import '../css/header.css';
import open from '../assets/bars-solid.svg'
import close from '../assets/x-solid.svg'

const Header = () => {

	const [menu, setMenu] = useState(false);
	const styleMenu = {
		right:'0',
		transition: 'right ease-out 300ms'
	};

	const clickMenu = () => menu === false ? setMenu(true) : setMenu(false);

	return (
		<header>
			<h1 className='title'>Faris Hasan</h1>
			<button type="button" onClick={clickMenu}>
				{menu === false && <img src={open} alt='open' width='25px' />}
				{menu === true && <img src={close} alt='close' width='25px' />}
			</button>
			<ul style={menu === true ? styleMenu : {}}>
				<li>
					<a href="#overview">
						<h4>Overview</h4>
					</a>
				</li>
				<li>
					<a href="#skills">
						<h4>Skills</h4>
					</a>
				</li>
				<li>
					<a href="#projects">
						<h4>Projects</h4>
					</a>
				</li>
				<li>
					<a href="#contact">
						<h4>Contact</h4>
					</a>
				</li>
			</ul>
		</header>
	);
};

export default Header;

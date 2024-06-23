import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Overview from './components/Overview';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {

	return (
		<>
			<Header />
			<Overview />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
};

export default App;

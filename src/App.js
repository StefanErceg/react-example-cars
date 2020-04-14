import React, { useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';

function App() {
	const [ search, setSearch ] = useState('');
	const [ manufacturerFilter, setManufacturerFilter ] = useState('All');
	return (
		<div className="App">
			<Header manufacturerHandler={setManufacturerFilter} />
			<Main searchKeyword={search.toLowerCase()} manufacturerFilter={manufacturerFilter} />
			<Footer searchHandler={setSearch} />
		</div>
	);
}

export default App;

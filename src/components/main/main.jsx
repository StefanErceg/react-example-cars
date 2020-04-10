import React from 'react';
import './main.css';
import cars from '../../data/cars.json';
import MainItem from '../main-item/main-item';

const Main = () => (
	<main className="main-wrap">
		{cars.map((car) => (
			<MainItem
				name={car.name}
				manufacturer={car.manufacturer}
				model={car.model}
				engine={car.engine}
				image={car.image}
			/>
		))}
	</main>
);

export default Main;

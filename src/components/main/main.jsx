import React from 'react';
import './main.css';
import cars from '../../data/cars.json';
import MainItem from '../main-item/main-item';

const Main = ({ searchKeyword, manufacturerFilter }) => (
	<main className="main-wrap">
		{cars
			.filter((car) => manufacturerFilter === 'All' || car.manufacturer === manufacturerFilter)
			.filter((car) => car.name.toLowerCase().includes(searchKeyword))
			.map((car) => (
				<MainItem
					name={car.name}
					manufacturer={car.manufacturer}
					model={car.model}
					engine={car.engine}
					image={car.image}
					key={car.id}
				/>
			))}
	</main>
);

export default Main;

import React from 'react';
import './main-item.css';

const MainItem = ({ name, manufacturer, model, engine, image }) => (
	<div className="main-item-wrap">
		<h4 className="car-name">{name}</h4>
		<div className="car-img-wrap">
			<img className="car-img" src={image} alt={name} />
		</div>
		<div className="car-info">
			<span>Manufacturer:</span>
			<span>{manufacturer}</span>
		</div>
		<div cassName="car-info">
			<span>Model:</span>
			<span>{model}</span>
		</div>
		<div cassName="car-info">
			<span>Engine:</span>
			<span>{engine}</span>
		</div>
	</div>
);

export default MainItem;

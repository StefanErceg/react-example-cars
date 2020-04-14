import React from 'react';
import './logo.css';

const Logo = ({ imageUrl, name, manufacturerHandler }) => (
	<div className="logo-wrap">
		<img src={imageUrl} alt={name} className="logo" onClick={() => manufacturerHandler(name)} />
	</div>
);

export default Logo;

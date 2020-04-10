import React from 'react';
import './logo.css';

const Logo = ({ imageUrl, name }) => (
	<div className="logo-wrap">
		<img src={imageUrl} alt={name} className="logo" />
	</div>
);

export default Logo;

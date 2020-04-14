import React from 'react';
import './header.css';
import Logo from '../logo/logo';
import data from '../../data/logos.json';

const Header = ({ manufacturerHandler }) => {
	return (
		<header className="header-wrap">
			<div className="name-wrap" onClick={() => manufacturerHandler('All')}>
				<h1 className="name">Stefan cars</h1>
			</div>
			<div className="logos">
				{data.map((item) => (
					<Logo imageUrl={item.img} name={item.name} key={item.id} manufacturerHandler={manufacturerHandler} />
				))}
			</div>
		</header>
	);
};

export default Header;

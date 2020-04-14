import React from 'react';
import './footer.css';

const Footer = ({ searchHandler }) => (
	<footer className="footer-wrap">
		<div className="search-wrap">
			<img src="/images/search-image.png" alt="search" className="search-img" />
			<div className="search-block">
				<span className="search-text">Search through our offer of cars </span>
				<input type="text" name="search" id="search" onChange={(event) => searchHandler(event.target.value)} />
			</div>
		</div>
	</footer>
);

export default Footer;

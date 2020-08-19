import React, { useState, Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';


import image from '../../assets/logo.png';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
	const [ open, setOpen ] = useState(false);

	if(window.initialWidth<700)setOpen(true)

	
	const userLinks = (
		
			<ul className={`nav-links ${open ? 'open' : null}`}>
				<Link to="/" onClick={() => setOpen(!open)}>Home</Link>
				<Link onClick={() => setOpen(!open)}>Projects</Link>
				<Link onClick={() => setOpen(!open)}>About</Link>
				<Link to="/post" onClick={() => setOpen(!open)}>Postare noua</Link>
				<Link onClick={() => {setOpen(!open); logout();}} to="/admin"> Logout </Link>
				
			</ul>
		
	);

	const guestLinks = (
		
			<ul className={`nav-links ${open ? 'open' : null}`}>
				<Link onClick={() => setOpen(!open)}>Home</Link>
				<Link onClick={() => setOpen(!open)}>Projects</Link>
				<Link onClick={() => setOpen(!open)}>About</Link>
			</ul>
		
	);

	return (
		<nav className="navbar">
			<Link to="/" className="logo" />
			{console.log(window.innerWidth)}
			<HamburgerMenu
				isOpen={open}
				menuClicked={() => setOpen(!open)}
				width={30}
				height={18}
				strokeWidth={5}
				rotate={0}
				color="black"
				className="menu"
				borderRadius={25}
				animationDuration={0.5}
			/>

			{!loading && <Fragment>{isAuthenticated ? userLinks : guestLinks}</Fragment>}
		</nav>
	);
};

Navbar.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps, { logout })(Navbar);

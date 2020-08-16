import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Actions
import { register } from '../../actions/auth';

const Register = ({ register, isAuthenticated }) => {
	const [ userData, setUserData ] = useState({
		username: '',
		email: '',
		password: '',
		password2: ''
	});

	const { username, email, password, password2 } = userData;
	const onChange = (e) => setUserData({ ...userData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();

		if (password !== password2) {
			console.log('Passwords do not match');
		} else {
			register({ username, email, password });
			console.log(`Created account with email: ${email}!`);
		}
	};

	if (isAuthenticated) {
		return <Redirect to="/" />;
	}

	return (
		<div className="register">
			<h1>Let's get connected</h1>
			<p>Create a new account</p>

			<form className="form" onSubmit={(e) => onSubmit(e)}>
				<input
					type="text"
					placeholder="Username"
					name="username"
					value={username}
					onChange={(e) => onChange(e)}
				/>

				<input type="email" placeholder="Email" name="email" value={email} onChange={(e) => onChange(e)} />

				<input
					type="password"
					placeholder="Password"
					name="password"
					value={password}
					onChange={(e) => onChange(e)}
				/>

				<input
					type="password"
					placeholder="Confirm password"
					name="password2"
					value={password2}
					onChange={(e) => onChange(e)}
				/>

				<button type="submit" value="Register" className="button">
					Register{' '}
				</button>
			</form>

			<p>
				{' '}
				Have an account? <Link to="/login">Sign In</Link>
			</p>
		</div>
	);
};

Register.propTypes = {
	register: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({ isAuthenticated: state.auth.isAuthenticated });

export default connect(mapStateToProps, { register })(Register);

import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Actions
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
	const [ userData, setUserData ] = useState({
		email: '',
		password: ''
	});

	const { email, password } = userData;

	const onChange = (e) => setUserData({ ...userData, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		login(email, password);
	};

	if (isAuthenticated) {
		return <Redirect to="/" />;
	}

	return (
		<div className="login">
			<h1>Connect</h1>
			<p>Sign in with an existing account</p>

			<form className="form" onSubmit={onSubmit}>
				<input type="email" placeholder="Email Adress" name="email" value={email} onChange={onChange} />

				<input
					type="password"
					placeholder="Password"
					name="password"
					value={password}
					onChange={onChange}
					minLength="6"
				/>

				<button type="submit" value="Login" className="button">
					Login
				</button>
			</form>

			<p>
				Don't have an account? <Link to="/register">Sign up</Link>
			</p>
		</div>
	);
};

Login.propTypes = {
	login: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);

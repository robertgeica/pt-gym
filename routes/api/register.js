const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator'); // /check

const User = require('../../models/User');
// @route           POST /register
// @description     Register User
// @access          Public
router.post(
	'/',
	[
		check('username', 'Userame is required').not().isEmpty(),
		check('email', 'Email must be a valid one').isEmail(),
		check('password', 'Enter a valid password').isLength({ min: 6 })
	],
	async (req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { username, email, password } = req.body;

		try {
			// Check if user exists
			let user = await User.findOne({ email });
			let userUsername = await User.findOne({ username });
			if (user || userUsername) {
				return res.status(400).json({ errors: [ { msg: 'User already exists.' } ] });
			}

			user = new User({
				username,
				email,
				password
			});

			// Encrypt password
			const salt = await bcrypt.genSalt(10);
			user.password = await bcrypt.hash(password, salt); // hash password

			await user.save(); // save user to db

			// Return jsonwebtoken
			const payload = {
				user: {
					id: user._id
				}
			};

			jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 36000 }, (err, token) => {
				if (err) throw err;
				res.json({ token });
			});
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server error');
		}
	}
);

module.exports = router;

const express = require('express');
const User = require('../models/userModel');
const router = express.Router();
const AppError = require('../error/Error');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middleware/verifyToken');

router.post('/auth/sign-up', async (req, res, next) => {
  try {
    const { email, username, password } = req.body;

    //check that all the fields have been submitted
    if (!email || !username || !password)
      return next(AppError('all fields are required', 404));

    //check if user already exists
    const user = await User.findOne({ email: email });
    if (user) {
      return next(new AppError('User already exists', 400));
    }

    //Hash the password
    const hashedPassword = bcrypt.hashSync(password, 12);

    //Create and save newUser
    const newUser = new User({ email, username, password: hashedPassword });
    await newUser.save();

    //remove sensitive data from the user obj
    const { password: userPassword, ...filteredUser } = newUser.toObject();

    //send the newly created user details
    return res
      .status(200)
      .json({ message: 'User successfully created', user: filteredUser });
  } catch (err) {
    next(err);
  }
});

router.post('/auth/sign-in', async (req, res, next) => {
  console.log('Incoming cookies:', req.cookies);
  try {
    const { username, password } = req.body;

    // Check if both username and password are provided
    if (!username || !password) {
      return next(new AppError('All fields are required', 400));
    }

    // Check if user exists
    const user = await User.findOne({ username });
    if (!user) {
      return next(new AppError('Invalid username or password', 400));
    }

    // Compare provided password with stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return next(new AppError('Invalid username or password', 400));
    }

    // Filter the user fields, excluding the password
    const { password: userPassword, ...filteredUser } = user.toObject();

    //const generate a token
    const secret = process.env.JWT_SECRET;
    const token = jwt.sign({ id: user._id, username: user.username }, secret, {
      expiresIn: '2hr',
    });

    return res
      .cookie('accessToken', token, {
        maxAge: 2 * 60 * 60 * 1000,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax', //protect against CSRF attacks
      })
      .json({ message: 'user successfully logged in', user: filteredUser });
  } catch (err) {
    next(err);
  }
});

// Route to check if the user is authenticated
router.get('/auth/check-auth', verifyToken, (req, res) => {
  res.json({ message: 'User is authenticated', user: req.user });
});
module.exports = router;

const jwt = require('jsonwebtoken');
const AppError = require('../error/Error');

const verifyToken = (req, res, next) => {
  //get the token from the cookie
  const token = req.cookies.accessToken;

  //return if no token os provided
  if (!token) return next(new AppError('unauthorized user', 401));

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; //attach decoded user info on the req object

    //continue to the next middleware
    next();
  } catch (error) {
    return next(new AppError('Invalid Token', 401));
  }
};

module.exports = verifyToken;

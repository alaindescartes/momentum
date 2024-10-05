class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode; // Custom property for HTTP status code
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error'; // Categorize as 'fail' or 'error' based on status code
    this.isOperational = true; // Flag for identifying operational errors

    Error.captureStackTrace(this, this.constructor); // Ensure the stack trace starts from where the error is created
  }
}

module.exports = AppError;

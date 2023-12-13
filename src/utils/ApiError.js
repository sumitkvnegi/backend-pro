// Define a class named ApiError that extends the built-in Error class
class ApiError extends Error {
  // Constructor function that initializes the object
  constructor(
    statusCode, // HTTP status code for the error
    message = "Something went wrong", // Error message (default is "Something went wrong")
    errors = [], // Array to hold additional error details
    stack = "" // Stack trace for debugging (optional)
  ) {
    // Call the constructor of the parent class (Error)
    super(message);

    // Set properties specific to the ApiError class
    this.statusCode = statusCode; // HTTP status code
    this.data = null; // Additional data (null by default)
    this.message = message; // Error message
    this.success = false; // Indicates if the operation was successful (false for errors)
    this.errors = errors; // Additional error details

    // If a stack trace is provided, set it; otherwise, capture the stack trace
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };

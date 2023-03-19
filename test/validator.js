const express = require('express');
const Joi = require('joi');
const app = express();

app.use(express.json())

// Define the model schema using Joi

const modelSchema = Joi.object({
    id: Joi.string().min(3).max(30).required(),
    name: Joi.number().integer().min(0).max(100).required(),
    data: Joi.object({
      address: Joi.string().required(),
      email: Joi.string().email().required(),
      phone: Joi.string().required()
    }).required(),
    age: Joi.number().integer().min(0).max(100).required(),
});

// Define the validation middleware function
function validateRequest(req, res, next) {
  // Validate the request using the model schema
  console.log(req.body);
  const { error } = modelSchema.validate(req.body, { abortEarly: false });
  if (error) {
    // If validation fails, return an error response with a status code and message
    const errorMessages = error.details.map((detail) => detail.message.replace(/\"/g, ''));
    return res.status(400).json({
      status: 'error',
      message: 'Invalid request data',
      errors: errorMessages,
    });
  }
  // If validation passes, move on to the next middleware function
  next();
}

// Use the validation middleware function for a route
app.post('/api/data', validateRequest, (req, res) => {
  // Your code to handle the request goes here
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

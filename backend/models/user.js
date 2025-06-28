const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema); // exporting the model to use it in other files
// This schema defines a User model with email and password fields, both required, and timestamps for creation and updates. The email field is unique, ensuring no two users can have the same email address. The model is exported for use in other parts of the application, such as user authentication and management. The timestamps option automatically adds createdAt and updatedAt fields to the schema, which can be useful for tracking when a user was created and last updated. 
const { Schema, model } = require('mongoose');

// Schema to create User model
const thoughtSchema = new Schema(
  {
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
       
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (date) => timeSince(date),
    },
    username: {
        type: String,
        required: true

    },
    reactions: [],
  },
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);


// Initialize our User model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
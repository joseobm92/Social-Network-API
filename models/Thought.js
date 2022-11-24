const { Schema, model } = require('mongoose');
const { Reaction } = require('./Reaction')
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

    },
    username: {
        type: String,
        required: true

    },
    reactions: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'reaction',
     }],
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

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});


// Initialize our User model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
const { Schema, Types } = require('mongoose');
// const { Reaction } = require('./Reaction')
// Schema to create Reaction model
const reactionSchema = new Schema(
  {
    reactionId: { 
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
     },

    reactionBody: {
        type: String,
        required: true,
        maxLength: 280
    },
    username: {
        type: String,
        required: true

    },
    createdAt: {
        type: Date,
        default: Date.now,

    }
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

// Initialize our Reaction model
// const Reaction = model('reaction', reactionSchema);

module.exports = reactionSchema;
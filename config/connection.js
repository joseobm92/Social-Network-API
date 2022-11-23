// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialmedia', {
//     useNewUrkParser: true,
//     useUnifiedTopology: true
// });

// module.exports = mongoose.connect
const { connect, connection } = require('mongoose');

connect('mongodb://localhost/usersPosts', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
const { User, Thought } = require('../models');

module.exports = {
  //get all users
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  //get a single user by ID
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .populate('thoughts')
      .populate('friends')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  // update an user

  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  //delete an User
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : Thought.deleteMany({ _id: { $in: user.thoughts } })
      )
      .then(() => res.json({ message: 'User and associated thoughts deleted!' }))
      .catch((err) => res.status(500).json(err));
  },

  //add a friend
  addFriend(req, res) {
    console.log(req.params);
    // find user by id
    // add friend based off friend's user id
    // both values in the request params
    // use addtoset for no duplicate friends
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    )
      // conditional based off user existing or not
      // if user does not exist, return does not exist
      // else return friend added 
      .then((user) => {

        console.log(user);
        !user
          ? res
            .status(404)
            .json('User with this ID does not exist!')
          : res.json({ message: `Added friend to user's friends list `, user })
      })


      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  //delete a friend
  deleteFriend(req, res) {
    console.log(req.params);
    // find user by id
    // delete friend based off friend's user id
    // both values in the request params
    // use pull operator to remove friend based off id
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    )
      // conditional based off user existing or not
      // if user does not exist, return does not exist
      // else return friend added 
      .then((user) => {

        console.log(user);
        !user
          ? res
            .status(404)
            .json('User with this ID does not exist!')
          : res.json({ message: `Deleted friend from user's friends list `, user })
      })


      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
};
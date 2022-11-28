const router = require('express').Router();

const {
    getSingleUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
  } = require('../../controllers/userController');
  //routes to get all users and create a user
  router.route('/').get(getUsers).post(createUser);
  //routes to get a single user by id, update an user, and delete and user
  router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);
  // routes to add and delete a friend
  router.route ('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend)


module.exports = router;
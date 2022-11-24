const router = require('express').Router();

const {
    getSingleThought,
    getThoughts,
    createThought,
    updateThought,
    deleteThought,
    addFriend,
    deleteFriend,
  } = require('../../controllers/thoughtController');
  
  router.route('/').get(getThoughts).post(createThought);
  
  router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteUser);

  router.route ('/:thoughtId/reactions').post(addFriend).delete(deleteFriend)




module.exports = router;
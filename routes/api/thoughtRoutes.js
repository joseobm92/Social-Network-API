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
  
  router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

  router.route ('/:thoughtId/reactions')




module.exports = router;
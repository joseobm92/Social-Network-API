const router = require('express').Router();

const {
    getSingleThought,
    getThoughts,
    createThought,
    updateThought,
    deleteThought,

    createReaction,
    deleteReaction,
  } = require('../../controllers/thoughtController');
  //routes to get all and create new thoughts
  router.route('/').get(getThoughts).post(createThought);
  //routes to get a thought by id, update and delete 
  router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);
  //route to create a new reaction
  router.route ('/:thoughtId/reactions').post(createReaction)
  //route to delete a reaction by Id
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)


module.exports = router;
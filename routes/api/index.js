const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');
const reactionRoutes = require('./reactionRoutes');

router.use('/reaction', reactionRoutes);
router.use('/thought', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;

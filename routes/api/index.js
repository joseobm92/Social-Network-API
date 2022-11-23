const router = require('express').Router();
const postRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

router.use('/thought', postRoutes);
router.use('/users', userRoutes);

module.exports = router;

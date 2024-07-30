const router = require('express').Router();
const userRoutes = require('./userRoutes');
const healthCheckRoutes = require('./healthCheckRoutes');

router.use('/users', userRoutes);
router.use('/health', healthCheckRoutes);

module.exports = router;
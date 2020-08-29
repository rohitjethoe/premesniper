const router = require('express').Router();

// Root directory.
router.get('/', (req, res) => res.send({ response: res.statusCode }));

module.exports = router;
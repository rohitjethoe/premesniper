const router = require('express').Router();
const controller = require('../controller/main.js')
// Root directory.
router.get('/', (req, res) => res.send({ response: res.statusCode }));

module.exports = router;
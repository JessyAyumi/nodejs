const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts');
const guard = require('../helpers/guard');

router.use(guard);
router.get('/', postsController.get);
router.post('/novo', postsController.novo);

module.exports = router;
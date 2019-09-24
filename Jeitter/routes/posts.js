const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts');

router.get('/', postsController.get);
router.post('/', postsController.novo);

module.exports = router;
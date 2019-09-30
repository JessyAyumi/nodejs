const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');
// router.get('/add', (req, res) =>{
//     res.send('Ta fumegando');
// });

router.get('/', indexController.index);
router.get('/sair', indexController.sair);
module.exports = router;
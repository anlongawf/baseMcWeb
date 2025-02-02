const express = require('express');
const { getHomepage, getLogin, getRegister, getTutorial, getDonate, getLeaderBoard } = require('../controllers/homeControllers'); 
const router = express.Router(); 

router.get('/', getHomepage);
router.get('/login', getLogin);
router.get('/register', getRegister);
router.get('/tutorial', getTutorial);
router.get('/donate', getDonate);
router.get('/top', getLeaderBoard);

module.exports = router;  

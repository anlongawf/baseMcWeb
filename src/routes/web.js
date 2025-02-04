import express from 'express';
import accountController from '../controllers/accountController.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/home', (req, res) => {
    res.render('home');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', accountController.login);

router.post('/register', accountController.register);

// Debug
// router.post('/login', (req, res, next) => {
//     console.log('Login Route - Detailed Logging:');
//     console.log('Full Request Body:', req.body);
//     console.log('Username:', req.body.username);
//     console.log('Password:', req.body.password);
//     next();
// }, accountController.login);

export default router;

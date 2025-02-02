const getHomepage = (req, res) => {
    return res.render('home');
};

const getLogin = (req, res) => {
    return res.render('login');
};

const getRegister = (req, res) => {
    return res.render('register');
};

const getLeaderBoard = (req, res) => {
    return res.render('top');
};

const getTutorial = (req, res) => {
    return res.render('tutorial');
};

const getDonate= (req, res) => {
    return res.render('donate');
};

module.exports = { getHomepage, getLogin, getRegister, getLeaderBoard, getTutorial, getDonate };

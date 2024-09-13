// controllers/main.js

// Method to handle the home page
exports.index = (req, res) => {
    res.render('index', { title: 'Home' });
};

// Method to handle the signin page
exports.signin = (req, res) => {
    res.render('signin', { title: 'Sign In' });
};

// Method to handle the location info page
exports.location = (req, res) => {
    res.render('index', { title: 'Location info' });
};

// Method to handle the review page
exports.review = (req, res) => {
    res.render('index', { title: 'Review' });
};

// Method to handle the about page
exports.about = (req, res) => {
    res.render('index', { title: 'About' });
};

// Method to handle the register page
exports.register = (req, res) => {
    res.render('register', { title: 'Register' });
};
var express = require('express');
var router = express.Router();

const  Database = require('../model/database');

router.post('/login', function(req, res, next) {
    const {body} = req;
    const {username, password} = body;

    const isLoggedIn = Database.login(username, password);
    const portfolio = isLoggedIn ? Database.getPortfolio(username) : null;

    res.send(portfolio);
});

router.post('/register', function(req, res, next) {
    const username = req.get('username');
    const password = req.get('password');

    const error = Database.addUser(username, password);
    res.send(error);
});

module.exports = router;

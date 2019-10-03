const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongo = require('./mongo');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    const User = db.Mongo.model('user', db.userSchema, 'user');
    User.find({ nome: 'Luis' }).lean().exec(function (e, users) {
        res.json(users);
        res.end();
    })
});

app.post('/user', function (req, res, next) {
    const User = db.Mongo.model('user', db.userSchema, 'user');
    const newUser = new User({
        nome: req.body.nome,
        email: req.body.email
    })

    newUser.save((error) => {
        if (error) {
            res.status(500).jsonp(error);
            res.end();
            return;
        }

        res.status(201).jsonp(newUser);
    })
});

app.listen(3001);

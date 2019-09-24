const express = require('express');
const ejs = require('ejs');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const postsRouter = require('./routes/posts');
// app.get('/',(req, res) => {
//     res.send('Hello :)');
// })

app.use(session({ secret: 'jessy', saveUninitialized: true, resave: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/posts', postsRouter);


app.set('view engine', 'ejs');

app.listen(3000);
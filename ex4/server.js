const express = require('express');
const app = express();

const rotas = require('./routes/route')

// const adminRoutes = express.Router();
// const clientRoutes = express.Router();

// // clientRoutes.get('/', (req, res) => {
// //     // res.send('<h1 style="color:purple">Hello World</h1>');
// //     // res
// //     //     .status(404)
// //     //     .send('Not found error 404');
// //     res.send('Olá Mundo');
// // });

// clientRoutes.get('/msg/:name', (req, res) => {
//     res.send('Olá ' + req.params.name);
// });

// adminRoutes.post('/', (req,res) =>{
//     res.send('Resposta ao post');
// });

// adminRoutes.get('/users', (req, res) =>{
//     res.send('Olá Users!');
// });

// app.use('/', clientRoutes);
// app.use('/admin', adminRoutes);
app.use(express.json());
app.use('/', rotas);

app.listen(3000);
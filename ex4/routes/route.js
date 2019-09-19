const express = require('express');
const router = express.Router();

const USER_DATA = [
    {
        nome: "Lukinha do Zap"
    },{
        nome: "Carlão do bingo"
    }
]

// const get = async (req, res) => {
//     res.json({ message: 'hello world' });
// };

// const post = async (req, res) => {
//     const {nome,cidade, ...outrosDados} = req.body;
//     res.send(`Olá ${nome} a sua cidade é ${cidade}`);
// };

const get = async (req, res) => {
    res.json(USER_DATA);
};

const post = async (req, res) => {
    USER_DATA.push(req.body);
    res.status(201).json(req.body);
};

router.get("/", get);
router.post("/", post);

module.exports = router;
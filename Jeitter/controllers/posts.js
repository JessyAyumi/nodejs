const md5 = require('../helpers/md5');
const POSTS_DATA = require('../models/posts');
const dateFns = require('date-fns');

exports.get = (req, res) => {

    const user = {
        ...req.session,
        imgMD5: md5(req.session.email)
    };

    const posts = POSTS_DATA.map(post => {
        const data = new Date(post.data);
        const dataFormatada = dateFns.format(data, 'dd/MM/yyyy hh:mm:ss');
        return {
            ...post,
            avatar: md5(post.email),
            data: dataFormatada
        }
    });

    const postCriado = req.query.criado ? true : false

    res.render('posts.ejs', {
        user: user,
        posts: posts,
        criado: postCriado
    });
};

exports.novo = (req, res) => {
    const novoPost = {
        nome: req.session.nome,
        email: req.session.email,
        texto: req.body.texto,
        data: Date.now()
    };
    POSTS_DATA.unshift(novoPost);

    res.status(201).redirect('/posts?criado=ok');
};
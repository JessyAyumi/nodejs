exports.get = (req, res) => {
    res.render('login.ejs');
};

exports.autenticar = (req, res) => {
    req.session.nome = req.body.nome;
    req.session.email = req.body.email;
    res.status(200).redirect('/posts');
};
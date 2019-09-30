exports.index = (req, res) => {
    if (req.session.email && req.session.nome)
        res.redirect('/posts');
    else
        res.redirect('/login');
};

exports.sair = (req,res) =>{
    req.session.destroy();
    res.redirect('/login');
};
const http = require('http');

const host = '127.0.0.1'

const port = 3000;

const server = http.createServer(
    // function(req,res){}
    (req, res) =>{
        res.writeHead(200, {'Content-type':'text/html; charset=utf-8'});
        res.end("<h1> Hello World </h1>");
    }
);

server.listen(port, host, () => {
    console.log('Servidor rodando em http://' + host + ':' + port);
});


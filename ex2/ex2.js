console.log("Avaliando o exemplo.js");

var invisivel = () =>{
    console.log("invisivel");
}

exports.mensagem = "Oi";

exports.falar = () => {
    console.log(exports.mensagem);
}
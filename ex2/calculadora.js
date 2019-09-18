var calculadora = require('./operacoes.js');
var readline = require('readline');

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var a, b;

leitor.question("Inserir 1º número:", (answer) => {
    a = answer;
    leitor.question("Inserir 2º número:", (answer) => {
        b = answer;
        leitor.close();

        console.log(a + ' / ' + b + ' = ' + calculadora.divi(a, b));
        console.log(a + ' * ' + b + ' = ' + calculadora.mult(a, b));
        console.log(a + ' + ' + b + ' = ' + calculadora.soma(a, b));
        console.log(a + ' - ' + b + ' = ' + calculadora.subt(a, b));
    });
});

// var a, b;
// async function exec() {
//     var read = () => {
//         leitor.question("Inserir 1º número:", (answer) => {
//             a = answer;
//             leitor.question("Inserir 2º número:", (answer) => {
//                 b = answer;
//                 leitor.close();
//             });
//         });
//     }
//     read();

//     var write = (a,b) => {
//         console.log(a + ' / ' + b + ' = ' + calculadora.divi(a, b));
//         console.log(a + ' * ' + b + ' = ' + calculadora.mult(a, b));
//         console.log(a + ' + ' + b + ' = ' + calculadora.soma(a, b));
//         console.log(a + ' - ' + b + ' = ' + calculadora.subt(a, b));
//     }

//     let load = await read;

//     write(a,b);
// }


// exec();
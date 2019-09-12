var circulo = require('./circulo.js');
var calculadora = require ('./operacoes.js')

console.log('1 / 1 = ' + calculadora.divi(1,1));
console.log('1 * 1 = ' + calculadora.mult(1,1));
console.log('1 + 1 = ' + calculadora.soma(1,1));
console.log('1 - 1 = ' + calculadora.subt(1,1));
console.log('Um círculo de raio 4 tem área de ' + circulo.area(4));

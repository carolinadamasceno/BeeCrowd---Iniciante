/*Neste problema, deve-se ler o código de uma peça 1,
 o número de peças 1, 
 o valor unitário de cada peça 1, 
 o código de uma peça 2, 
 o número de peças 2 
 e o valor unitário de cada peça 2. 
Após, calcule e mostre o valor a ser pago.*/

var input = require('fs').readFileSync('stdin', 'utf-8');
var linhas = input.split ('\n');

var primeiraLinha = linhas.shift ().split(' ');
var segundaLinha = linhas.shift ().split(' ');

var codUm = parseInt(primeiraLinha.shift ());
var qtdUm = parseInt(primeiraLinha.shift());
var valorunitUm = parseFloat(primeiraLinha.shift());
var totalUm = qtdUm*valorunitUm;

var codDois = parseInt(segundaLinha.shift ());
var qtdDois = parseInt(segundaLinha.shift());
var valorunitDois = parseFloat(segundaLinha.shift());
var totalDois = qtdDois*valorunitDois;

var totalG = (totalUm + totalDois).toFixed(2);

console.log('VALOR A PAGAR: R$ ' + totalG);
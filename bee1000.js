/*
COMANDO: 

O seu primeiro programa em qualquer linguagem de programação normalmente é o "Hello World!". 
Neste primeiro problema tudo o que você precisa fazer é imprimir esta mensagem na tela.

Entrada
Este problema não possui nenhuma entrada.

Saída
Você deve imprimir a mensagem "Hello World!".
*/

var input = require('fs').readFileSync('stdin', 'utf8');
var entradas = input.split('\n');

// Exibindo mensagem no console para usuário
console.log ('Hello World!');
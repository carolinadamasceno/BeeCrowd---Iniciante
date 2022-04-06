/*
COMANDO:

Leia 2 valores inteiros e armazene-os nas variáveis A e B. 
Efetue a soma de A e B atribuindo o seu resultado na variável X. 
Imprima X conforme exemplo apresentado abaixo. 

Não apresente mensagem alguma além daquilo que está sendo especificado e 
não esqueça de imprimir o fim de linha após o resultado, 
caso contrário, você receberá "Presentation Error".

Entrada
A entrada contém 2 valores inteiros.

Saída
Imprima a mensagem "X = " (letra X maiúscula) seguido pelo valor da variável X e pelo final de linha. 
Cuide para que tenha um espaço antes e depois do sinal de igualdade, conforme o exemplo abaixo.
*/

var input = require('fs').readFileSync('stdin', 'utf8');

// Define a quebra de linha como separador de termos de entrada
var entradas = input.split('\n');

// Função parseInt usada para converter as entradas que são recebidas como STRINGS para números INTEIROS

// Método SHIFT remove o primeiro valor do array entradas e o retorna pra variável A
var A = parseInt(entradas.shift());
// Método SHIFT remove o próximo valor do array entradas e o retorna pra variável B
var B = parseInt(entradas.shift());

var X = A + B;

// Imprimindo mensagem em console pro usuário
console.log ('X = ' + X);
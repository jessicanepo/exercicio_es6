"use strict";

// Iterando sobre o array 'redesSociais' usando um loop 'for'
var redesSociais = ['Facebook', 'Instagram', 'Twitter'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho perfil na rede social: ".concat(redesSociais[i]));
}

// Utilizando o método 'forEach' para iterar sobre o array 'redesSociais'
// e imprimir cada elemento com seu índice
redesSociais.forEach(function (nomeDaRedeSocial, indice) {
  console.log("#".concat(indice, " Eu tenho perfil na rede social: ").concat(nomeDaRedeSocial));
});

// Usando o método 'map' para criar um novo array baseado no array 'alunos'
var alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];
var alunos2 = alunos.map(function (itemAtual) {
  return {
    nome: itemAtual,
    curso: 'Frontend'
  };
});
console.log(alunos2);

// Utilizando o método 'find' para encontrar um objeto com o nome 'Paula'
var paula = alunos2.find(function (item) {
  return item.nome == 'Paula';
});
console.log(paula);

// Utilizando o método 'findIndex' para encontrar o índice de um objeto com o nome 'Paula'
var indiceDaPaula = alunos2.findIndex(function (item) {
  return item.nome == 'Paula';
});
console.log(indiceDaPaula);

// Utilizando os métodos 'every' e 'some' para verificar se todos os alunos são de Frontend
// e se existe algum aluno de Backend no array 'alunos2'
var todosAlunosSaoFrontend = alunos2.every(function (item) {
  return item.curso === 'Frontend';
});
console.log(todosAlunosSaoFrontend);
var existeAlgumAlunoDeBackend = alunos2.some(function (item) {
  return item.curso === 'Backend';
});
console.log(existeAlgumAlunoDeBackend);

// Utilizando o método 'filter' para filtrar os alunos que cursam Backend
var alunosDeBackend = alunos2.filter(function (item) {
  return item.curso === 'Backend';
});
console.log(alunosDeBackend);

// Utilizando o método 'reduce' para somar os valores de um array
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);

// Comparando o uso de 'reduce' com um loop 'for' para calcular a soma dos valores de um array
var somaComFor = 0;
for (var _i = 0; _i < nums.length; _i++) {
  somaComFor += nums[_i];
}
console.log(somaComFor);

// Utilizando o método 'reduce' para concatenar os nomes dos alunos
var nomesDosAlunos = alunos2.reduce(function (acumulador, itemAtual) {
  acumulador += "".concat(itemAtual.nome);
  return acumulador;
}, '');
console.log(nomesDosAlunos);
"use strict";

var nomeDosAlunos = ['Felipe', 'Amanda', 'Pedro', 'Natalia'];
var notasDosAlunos = [8, 5, 2, 6];
var alunos = nomeDosAlunos.map(function (nome, indice) {
  return {
    nome: nome,
    curso: 'Engenharia de Software',
    nota: notasDosAlunos[indice]
  };
});
console.log(alunos);
function alunosAprovados(arrayDeAlunos) {
  return arrayDeAlunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var alunosAprovadosNotaFinal = alunosAprovados(alunos);
console.log(alunosAprovadosNotaFinal);
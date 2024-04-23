const nomeDosAlunos = ['Felipe', 'Amanda', 'Pedro', 'Natalia'];
const notasDosAlunos = [8, 5, 2, 6];

const alunos = nomeDosAlunos.map((nome, indice) => ({
    nome: nome,
    curso: 'Engenharia de Software',
    nota: notasDosAlunos[indice]
}));

console.log(alunos);

function alunosAprovados(arrayDeAlunos) {
    return arrayDeAlunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovadosNotaFinal = alunosAprovados(alunos);
console.log(alunosAprovadosNotaFinal)

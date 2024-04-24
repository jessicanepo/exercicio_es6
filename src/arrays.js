// Iterando sobre o array 'redesSociais' usando um loop 'for'
const redesSociais = ['Facebook', 'Instagram', 'Twitter'];
for(let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`);
}

// Utilizando o método 'forEach' para iterar sobre o array 'redesSociais'
// e imprimir cada elemento com seu índice
redesSociais.forEach(function(nomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`);
});

// Usando o método 'map' para criar um novo array baseado no array 'alunos'
const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];
const alunos2 = alunos.map(function(itemAtual) {
    return {
        nome: itemAtual, 
        curso: 'Frontend'
    };
});
console.log(alunos2);

// Utilizando o método 'find' para encontrar um objeto com o nome 'Paula'
const paula = alunos2.find(function(item) {
    return item.nome == 'Paula';
});
console.log(paula);

// Utilizando o método 'findIndex' para encontrar o índice de um objeto com o nome 'Paula'
const indiceDaPaula = alunos2.findIndex(function(item) {
    return item.nome == 'Paula';
});
console.log(indiceDaPaula);

// Utilizando os métodos 'every' e 'some' para verificar se todos os alunos são de Frontend
// e se existe algum aluno de Backend no array 'alunos2'
const todosAlunosSaoFrontend = alunos2.every(function(item) {
    return item.curso === 'Frontend';
});
console.log(todosAlunosSaoFrontend);

const existeAlgumAlunoDeBackend = alunos2.some(function(item) {
    return item.curso === 'Backend';
});
console.log(existeAlgumAlunoDeBackend);

// Utilizando o método 'filter' para filtrar os alunos que cursam Backend
const alunosDeBackend = alunos2.filter(function(item) {
    return item.curso === 'Backend';
});
console.log(alunosDeBackend);

// Utilizando o método 'reduce' para somar os valores de um array
const nums = [10, 20, 30, 10];
const soma = nums.reduce(function(acumulador, itemAtual) {
    acumulador += itemAtual;
    return acumulador;
}, 0);
console.log(soma);

// Comparando o uso de 'reduce' com um loop 'for' para calcular a soma dos valores de um array
let somaComFor = 0;
for(let i = 0; i < nums.length; i++) {
    somaComFor += nums[i];
}
console.log(somaComFor);

// Utilizando o método 'reduce' para concatenar os nomes dos alunos
const nomesDosAlunos = alunos2.reduce(function(acumulador, itemAtual) {
    acumulador += `${itemAtual.nome}`;
    return acumulador;
}, '');
console.log(nomesDosAlunos);

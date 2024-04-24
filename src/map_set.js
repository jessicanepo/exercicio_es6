let meuMap = new Map();
meuMap.set("nome", "jessica");
meuMap.set("stack", "html, css, js");


console.log(meuMap);

meuMap.get("nome");

const nome = meuMap.get("nome");

console.log(nome);

console.log(meuMap.size)

console.log(meuMap.has("sobrenome"))

// meuMap.clear()

console.log(meuMap.size)

for (let chave of meuMap.keys()) {
    console.log(chave);
}

for (let valor of meuMap.values()) {
    console.log(valor);
}

for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

meuMap.delete("stack");

console.log(meuMap)

// nome => jessica
// stack => html, css, js

const cpfs = new Set();

cpfs.add('148998762784')
cpfs.add('88787664704')
cpfs.add('59654996049')

console.log(cpfs)

console.log(cpfs.keys())
console.log(cpfs.values())

cpfs.forEach((valor) => {
    console.log(valor);
})

const array = ['Jessica Nepomuceno', 'Lene Nepomuceno', 'Toni Simoes', 'Diego', 'Diego', 'Jessica Nepomuceno']

const arrayComoSet = new Set([...array])

const arraySemItensDuplicados = [...arrayComoSet]

console.log(arrayComoSet)
console.log(arraySemItensDuplicados)


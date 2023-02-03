const fs = require('fs').promises;
const readline = require('readline-sync');

async function lerTodo() {
  const dados = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(dados);
  simpsons.forEach((simp) => {
    console.log(`${simp.id} - ${simp.name}`);
  });
}

async function dadosPersonagem(id) {
  const dados = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(dados);
  const personagem = simpsons.find((simp) => id === Number(simp.id));
  if(!personagem)
    throw new Error('id não encontrado');

  console.log(personagem);
}



lerTodo();
const personId = readline.question('Qual o id está buscando? ');
dadosPersonagem(Number(personId));
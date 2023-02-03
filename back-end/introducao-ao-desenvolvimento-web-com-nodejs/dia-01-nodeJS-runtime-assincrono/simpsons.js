const fs = require('fs').promises;
const readline = require('readline-sync');

//exercicio 6-a
async function lerTodo() {
  const dados = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(dados);
  simpsons.forEach((simp) => {
    console.log(`${simp.id} - ${simp.name}`);
  });
}
//exercicio 6b
async function dadosPersonagem() {
  const personId = readline.question('Qual o id está buscando? ');
  const id = Number(personId);
  const dados = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(dados);
  const personagem = simpsons.find((simp) => id === Number(simp.id));
  if(!personagem)
    throw new Error('id não encontrado');

  console.log(personagem);
}

//exercicio 6c


lerTodo();
dadosPersonagem();
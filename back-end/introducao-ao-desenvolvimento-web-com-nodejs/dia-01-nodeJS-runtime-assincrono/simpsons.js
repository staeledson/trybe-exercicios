const fs = require('fs').promises;

async function lerTodo() {
  const dados = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(dados);
  simpsons.forEach(simp => {
    console.log(`${simp.id} - ${simp.name}`);
  });
}

lerTodo();
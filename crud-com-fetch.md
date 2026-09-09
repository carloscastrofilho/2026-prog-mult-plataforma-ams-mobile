Operações do CRUD com Fetch1. Ler dados (Read - GET)Use o método GET para buscar dados da sua API. [1] (https://translate.google.com/translate?u=https://ngrok.com/blog/react-crud-example&hl=pt&sl=en&tl=pt&client=sge), [2] (https://www.youtube.com/watch?v=6GSVWaMSuio&t=35)javascriptconst getDados = async () => {
try {
const resposta = await fetch('http://SUA_URL_DA_API/usuarios');
const dados = await resposta.json();
console.log(dados);
} catch (erro) {
console.error('Erro ao buscar:', erro);
}
};
Use o código com cuidado.2. Criar dados (Create - POST)Use o método POST enviando um cabeçalho JSON e o corpo da requisição. [1] (https://translate.google.com/translate?u=https://builtin.com/software-engineering-perspectives/react-api&hl=pt&sl=en&tl=pt&client=sge), [2] (https://www.youtube.com/watch?v=6GSVWaMSuio&t=35)javascriptconst criarDado = async (novoUsuario) => {
try {
const resposta = await fetch('http://SUA_URL_DA_API/usuarios', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(novoUsuario),
});
const resultado = await resposta.json();
console.log('Criado com sucesso:', resultado);
} catch (erro) {
console.error('Erro ao criar:', erro);
}
};
Use o código com cuidado.3. Atualizar dados (Update - PUT)Use o método PUT para alterar um registro existente pelo ID. [1] (https://translate.google.com/translate?u=https://builtin.com/software-engineering-perspectives/react-api&hl=pt&sl=en&tl=pt&client=sge), [2] (https://www.youtube.com/watch?v=6GSVWaMSuio&t=35)javascriptconst atualizarDado = async (id, dadosAtualizados) => {
try {
const resposta = await fetch(`http://SUA_URL_DA_API/usuarios/${id}`, {
method: 'PUT',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify(dadosAtualizados),
});
const resultado = await resposta.json();
console.log('Atualizado com sucesso:', resultado);
} catch (erro) {
console.error('Erro ao atualizar:', erro);
}
};
Use o código com cuidado.4. Deletar dados (Delete - DELETE)Use o método DELETE informando o ID do item que deseja remover. [1] (https://www.youtube.com/watch?v=6GSVWaMSuio&t=35), [2] (https://translate.google.com/translate?u=https://builtin.com/software-engineering-perspectives/react-api&hl=pt&sl=en&tl=pt&client=sge)javascriptconst deletarDado = async (id) => {
try {
await fetch(`http://SUA_URL_DA_API/usuarios/${id}`, {
method: 'DELETE',
});
console.log('Deletado com sucesso');
} catch (erro) {
console.error('Erro ao deletar:', erro);
}
};
Use o código com cuidado.Dica importante para EmuladoresSe estiver testando no Android Emulator, evite usar localhost. Prefira o IP 10.0.2.2 ou o IP local da sua máquina na rede se estiver usando um aparelho físico. [1] (https://pt.linkedin.com/pulse/react-native-como-pegar-dados-do-banco-de-mysql-rest-penha-simplicio)Se quiser, me diga:Qual é a origem dos dados (API Node.js, Firebase, JSON Server)?Você precisa de ajuda para integrar isso dentro de um useEffect ou em botões (onPress)?

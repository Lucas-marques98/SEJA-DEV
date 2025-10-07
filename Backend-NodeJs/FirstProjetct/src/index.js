const express = require('express'); // Importa o módulo Express para criar o servidor web
const app = express(); // Cria uma instância do aplicativo Express
const port = 3000; // Define a porta onde o servidor irá escutar

app.get('/', (req, res) => { // Define uma rota GET para o caminho raiz "/"
  res.send("app GET") // Envia uma resposta de texto para requisições GET
});

app.post('/', (req, res) => { // Define uma rota POST para o caminho raiz "/"
    res.send("app POST") // Envia uma resposta de texto para requisições POST
})

app.delete('/', (req, res) => { // Define uma rota DELETE para o caminho raiz "/"
    res.send("app DELETE") // Envia uma resposta de texto para requisições DELETE
})

app.listen(port, () => { // Inicia o servidor e faz com que ele escute na porta definida
  console.log(`App online na porta ${port}`); // Exibe uma mensagem no console informando que o servidor está rodando
});
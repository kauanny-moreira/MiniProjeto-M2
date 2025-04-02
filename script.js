// Cadastro de jogadores de futebol numa liga de futebol

// const paragrafo = document.createElement("p");
// // adicionando ao body
// document.body.appendChild(paragrafo);
// paragrafo.innerText = "Texto alterado pelo JavaScript!"

    const nomeInput = document.getElementById('nome');
const dataNascimentoInput = document.getElementById('dataNascimento');
const timeInput = document.getElementById('time');
const enderecoInput = document.getElementById('endereco');
const telefoneContatoInput = document.getElementById('telefoneContato');
const cpfInput = document.getElementById('cpf');

const jogadores = [];


class Jogador{
    constructor (nome, dataDeNasciemnto, time, endereco, telefoneContato, cpf) {
        this.nome = nome;
        this.dataDeNascimento = dataDeNascimento;
        this.time = time;
        this.endereco = endereco;
        this.telefoneContato = telefoneContato;
        this.cpf = cpf;
    } 
    exibirInformacoes() {
        return `Nome: ${this.nome}, Data de Nascimento: ${this.dataDeNascimento}, Time: ${this.time}, Endereço: ${this.endereco}, Telefone: ${this.telefoneContato}, CPF: ${this.cpf}`;
    }}


    function cadastrarJogador() {
        // Obter os valores dos inputs usando a propriedade .value
        const nome = nomeInput.value;
        const dataDeNascimento = dataNascimentoInput.value;
        const time = timeInput.value;
        const endereco = enderecoInput.value;
        const telefoneContato = telefoneContatoInput.value;
        const cpf = cpfInput.value;
        const jogadorUm = new Jogador (nome, dataDeNascimento, time, endereco, telefoneContato, cpf);
        exibirListaJogadores();
    }
 
    function exibirListaJogadores() {
        // Limpar a lista existente na tela
        listaJogadores.innerHTML = '';
    
        // Iterar sobre o array 'jogadores' e criar um item de lista para cada jogador
        jogadores.forEach((jogador, index) => {
            const item = document.createElement('li');
            Item.textContent = jogador.exibirInformacoes();
            listaJogadores.appendChild(item);
        });
    }

 const botaoCadastro = document.getElementById('botaoCadastro');
if (botaoCadastro) {
    botaoCadastro.addEventListener('click', cadastrarJogador);
}
exibirListaJogadores();

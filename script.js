const jogadores = [];

class Jogador {
    constructor(nome, dataDeNascimento, time, endereco, telefoneContato, cpf) {
        this.nome = nome;
        this.dataDeNascimento = dataDeNascimento;
        this.time = time;
        this.endereco = endereco;
        this.telefoneContato = telefoneContato;
        this.cpf = cpf;
    }
}

const nomeInput = document.getElementById('nome');
const dataNascimentoInput = document.getElementById('dataNascimento');
const timeInput = document.getElementById('time');
const enderecoInput = document.getElementById('endereco');
const telefoneContatoInput = document.getElementById('telefoneContato');
const cpfInput = document.getElementById('cpf');
const btnSave = document.getElementById("btn-save");
const btnList = document.getElementById("btn-list");
const containerList = document.getElementById("container-jogadores");
const ulListJogadores = document.getElementById("jogadoresCadastrados");
// const btnEdit = document.createElement("button");
// const btnDelete = document.createElement("button");


btnSave.addEventListener("click", () => {
    const jogador = {
        nome: nomeInput.value,
        dataDeNascimento: dataNascimentoInput.value,
        time: timeInput.value,
        endereco: enderecoInput.value,
        telefoneContato: telefoneContatoInput.value,
        cpf: cpfInput.value
    };

    jogadores.push(jogador);
    alert("Jogadora cadastrado com sucesso. Clique para listar.");
    limparFormulario();

});

btnList.addEventListener("click", listCadastros);


function listCadastros() {
    ulListJogadores.innerHTML = '';
    for (let i = 0; i < jogadores.length; i++) {
        createList(i, jogadores[i].nome, jogadores[i].dataDeNascimento, jogadores[i].time, jogadores[i].endereco, jogadores[i].telefoneContato, jogadores[i].cpf);
    }
}
// function listCadastros() {
//     ulListJogadores.innerHTML = '';
//  for (let i = 0; i < jogadores.length; i++) {
//         createList(index, jogadores.nome, jogadores.dataDeNascimento, jogadores.time, jogadores.endereco, jogadores.telefoneContato, jogadores.cpf);
//     };
// }



function createList(index, nome, dataDeNascimento, time, endereco, telefoneContato, cpf) {
    const btnDelete = document.createElement("button");
    const btnEdit = document.createElement("button")

    const listItem = document.createElement("li");
    listItem.classList.add("jogador-card");

    const nomeJogador = document.createElement("h3");
    nomeJogador.classList.add("jogador-nome");
    nomeJogador.innerHTML = nome;

    const divInformacoes = document.createElement("div");
    divInformacoes.classList.add("jogador-info");

    const dataNascimentoJogador = document.createElement("p");
    dataNascimentoJogador.classList.add("data");
    dataNascimentoJogador.innerHTML = `Data de Nascimento: ${dataNascimento}`;

    const timeJogador = document.createElement("p");
    timeJogador.classList.add("time");
    timeJogador.innerHTML = `Time: ${time}`;

    const enderecoJogador = document.createElement("p");
    enderecoJogador.classList.add("endereco");
    enderecoJogador.innerHTML = `Endereço: ${endereco}`;

    const telefoneContatoJogador = document.createElement("p");
    telefoneContatoJogador.classList.add("telefone");
    telefoneContatoJogador.innerHTML = `Telefone: ${telefoneContato}`;

    const cpfJogador = document.createElement("p");
    cpfJogador.classList.add("cpf");
    cpfJogador.innerHTML = `CPF: ${cpf}`;

    btnEdit.innerHTML = 'Editar';
    btnDelete.innerHTML = 'Deletar';


    
    btnEdit.addEventListener("click", () => {

        jogadores[index].nome = nomeInput.value.trim() || jogadores[index].nome;
        jogadores[index].dataDeNascimento = dataNascimentoInput.value.trim() || jogadores[index].dataDeNascimento;
        jogadores[index].time = timeInput.value.trim()|| jogadores[index].time;
        jogadores[index].endereco = enderecoInput.value.trim() || jogadores[index].endereco;
        jogadores[index].telefoneContato = telefoneContatoInput.value.trim() || jogadores[index].telefoneContato;
        jogadores[index].cpf = cpfInput.value.trim() || jogadores[index].cpf;
        listCadastros();
        limparFormulario();

    });

    
    btnDelete.addEventListener("click", () => {
        jogadores.splice(index, 1);
        listCadastros();
    });

    divInformacoes.appendChild(dataNascimentoJogador);
    divInformacoes.appendChild(timeJogador);
    divInformacoes.appendChild(enderecoJogador);
    divInformacoes.appendChild(telefoneContatoJogador);
    divInformacoes.appendChild(cpfJogador);
    divInformacoes.appendChild(btnEdit);
    divInformacoes.appendChild(btnDelete);

    listItem.appendChild(nomeJogador);
    listItem.appendChild(divInformacoes);


    ulListJogadores.appendChild(listItem);
}

function limparFormulario() {
    nomeInput.value = "";
    dataNascimentoInput.value = "";
    timeInput.value = "";
    enderecoInput.value = "";
    telefoneContatoInput.value = "";
    cpfInput.value = "";
}
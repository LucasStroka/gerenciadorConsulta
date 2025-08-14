const {medico, paciente, consultas} = require("../data/dados")

function exibirMedicos() {
    console.clear()
    console.log("=".repeat(75));
    for (let i = 0; i < medico.length; i++) {
        console.log(`${medico[i].id} - Nome: ${medico[i].nome} - Especialização: ${medico[i].especialização}`);
    }
    console.log("=".repeat(75));
}

function exibirPacientes() {
    console.clear()
    console.log("=".repeat(75));
    for (let i = 0; i < paciente.length; i++) {
        console.log(`${paciente[i].id} - Nome: ${paciente[i].nome} - Idade: ${paciente[i].idade}`);
    }
    console.log("=".repeat(75));
}

function exibirConsultas() {
    console.clear()
    console.log("=".repeat(75));
    for (let i = 0; i < consultas.length; i++) {
        console.log(`ID: ${consultas[i].id}
Descrição: ${consultas[i].descricao}
ID Medico: ${medico[parseInt(consultas[i].medico)].id} - Medico: ${medico[parseInt(consultas[i].medico)].nome} - Especialização: ${medico[parseInt(consultas[i].medico)].especialização}
ID Paciente: ${paciente[(consultas[i].paciente)-1].id} - Nome: ${paciente[(consultas[i].paciente)-1].nome} - Idade: ${paciente[(consultas[i].paciente)-1].idade}`);
}
    console.log("=".repeat(75));
}

//TODO/ Exibir Consultar de um medico 

module.exports = {exibirMedicos, exibirPacientes, exibirConsultas}

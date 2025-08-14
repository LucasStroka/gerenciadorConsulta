const medico = [
    {id: 1, nome: "Dr. House", especialização: "Pediatra"},
    {id: 2, nome: "Dra. Grey", especialização: "Cirurgião"}
]

const paciente = [
    {id: 1, nome: "Jhoony", idade: 36},
    {id: 2, nome: "John Doe", idade: 42}
]

const consultas = [
    {id: 1, medico: 1, paciente: 2, descricao: "Consulta Rotina"}
]

module.exports = {medico, paciente, consultas}
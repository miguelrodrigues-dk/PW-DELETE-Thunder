Integrantes: Miguel da Silva Rodrigues e Nicolas Santos.2ºDS.
# PW-DELETE-Thunder

Rotas do Aluno:
Servidor Inicial: http://localhost:3000
Extensão: Thunder Client

Rota-Listar todos os alunos:
•	Metodo:GET
•	URL: http://localhost:3000/alunos
•	Resposta: (200 OK);

let alunos = [
    { id: 1, nome: "Miguel Rodrigues", email: "Saiyajin@gmail.com" },
    { id: 2, nome: "Nicolas Santos", email: "Interdimensional@gmail.com" },
    { id: 3, nome: "Matheus Zaccarias", email: "Koopa@gmail.com.com" }
];

Rota-Buscar por ID:
•	Metodo:GET
•	URL: http://localhost:3000/alunos/1
•	Resposta: (200 OK);

{
  "id": 1,
  "nome": "Miguel Rodrigues",
  "email": "Saiyajin@gmail.com"
}
•	Resposta do erro (404):

{
  "message": "Aluno não encontrado"
}




Rota-Cadastrar um novo ID:
•	Metodo:POST
•	URL: http://localhost:3000/alunos
•	Enviar: (Body JSON):

Envio:Body Json
{

  "nome": "M",
  "email": "M@gmail.com.com"
}

Adicionado o novo ID:
{
  "id": 4,
  "nome": "M",
  "email": "M@gmail.com.com"
}

Rota-Atualizar aluno:
•	Metodo:PUT
•	URL: http://localhost:3000/alunos/1
•	Enviar: (Body JSON):

{
  "message": "Aluno atualizado com sucesso",
  "aluno": {
    "id": 4,
    "nome": "AULA_PW",
    "email": "PW_NEW@gmail.com.com"
  }
}



Rota-EXCLUIR ALUNO:
•	Metodo:DELETE
•	URL: http://localhost:3000/alunos/1
•	Resposta: (200 OK):

{
  "mensagem": "Aluno removido com Sucesso"
}

Integrantes: Miguel da Silva Rodrigues e Nicolas Santos de Souza.2ºDS.

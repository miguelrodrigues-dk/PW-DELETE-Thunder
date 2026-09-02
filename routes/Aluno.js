const express = require("express");
const router = express.Router();

let alunos = [
    { id: 1, nome: "Goku", email: "Saiyajin@gmail.com" },
    { id: 2, nome: "OneAbove", email: "Interdimensional@gmail.com" },
    { id: 3, nome: "Bowser", email: "Koopa@gmail.com.com" }
];
//Rota para mostrar todos os alunos
router.get("/", (req, res) => {
    res.status(200).json(alunos);
});


//rota por ID(1,2 ou 3) para mostrar o aluno correspondente
//http://localhost:3000/alunos/3
router.get("/:id", (req, res) => {
    let id = Number(req.params.id);
    let aluno = alunos.find(a => a.id === id);
    if (!aluno) {
        return res.status(404).json({
            message: 'Aluno não encontrado'
        });
    }


    res.status(200).json(aluno);
});


//salvar uma nova categoria - Post
router.post("/", (req, res) => {
    let { nome, email } = req.body;

    if (!nome) {
        return res.status(400).json({
            message: "O Nome é obrigatório"
        })
    }

    let novoRegistro = {
        id: alunos.length + 1,
        nome,
        email
    };

    alunos.push(novoRegistro);
    res.status(201).json(novoRegistro);

});


// Rota para atualizar um aluno existente - Put
router.put("/:id", (req, res) => {
    let id = Number(req.params.id);
    let aluno = alunos.find(a => a.id === id);
    let { nome, email } = req.body;

    if (!aluno) {
        return res.status(404).json({
            message: 'Aluno não encontrado'
        });
    }

    aluno.nome = nome;
    aluno.email = email;

    res.status(200).json({
        message: 'Aluno atualizado com sucesso',
        aluno
    });
});

//Excluir Registro
router.delete("/:id", (req, res) => {
    let id = parseInt(req.params.id);

    let indice = alunos.findIndex((a) => a.id === id);

    if (indice === -1){
        return res.status(404).json({mensagem: "Aluno não encontrado"})
    }

    alunos.splice(indice, 1);
    
    res.json({mensagem: "Aluno removido com Sucesso"});

});

module.exports = router;
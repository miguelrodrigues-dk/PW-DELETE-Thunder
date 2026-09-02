const express = require("express");
const router = express.Router();

let funcionarios = [
    { id: 1, nome: "Nicolas", telephone: "(11) 323-3434" },
    { id: 2, nome: "Matheus", telephone: "0800-761-0867" },
    { id: 3, nome: "Miguel", telephone: "(202) 358-0001 " }
];
//Rota para mostrar todos os fornecedores
router.get("/", (req, res) => {
    res.status(200).json(funcionarios);
});

//rota por ID(1,2 ou 3) para mostrar a categoria correspondente
//http://localhost:3000/categorias/3
router.get("/:id", (req, res) => {
    let id = Number(req.params.id);
    let funcionario = funcionarios.find(fun => fun.id === id);
    if (!funcionario) {
        return res.status(404).json({
            message: 'Funcionario não encontrado'
        });
    }


    res.status(200).json(funcionario);
});


//salvar uma nova categoria - Post
router.post("/", (req, res) => {
    let { nome, telephone } = req.body;

    if (!nome) {
        return res.status(400).json({
            message: "Funcionario é obrigatório"
        })
    }

    let novoRegistro = {
        id: funcionarios.length + 1,
        nome,
        telephone
    };

    funcionarios.push(novoRegistro);
    res.status(201).json(novoRegistro);

});


// Rota para atualizar uma categoria existente - Put
router.put("/:id", (req, res) => {
    let id = Number(req.params.id);
    let funcionario = funcionarios.find(fun => fun.id === id);
    let { nome, telephone } = req.body;

    if (!funcionario) {
        return res.status(404).json({
            message: 'Funcionario não encontrado'
        });
    }

    funcionario.nome = nome;
    funcionario.telephone = telephone;


    res.status(200).json({
        message: 'Funcionario atualizado com sucesso',
        funcionario
    });
});


// Rota para atualizar uma categoria existente - Put
router.put("/:id", (req, res) => {
    let id = Number(req.params.id);
    let funcionario = funcionarios.find(f => f.id === id);
    let { nome, telephone } = req.body;

    if (!funcionario) {
        return res.status(404).json({
            message: 'Funcionario não encontrado'
        });
    }

    funcionario.nome = nome;
    funcionario.telephone = telephone;

    res.status(200).json({
        message: 'Funcionario atualizado com sucesso',
        funcionario
    });
});

//Excluir Registro
router.delete("/:id", (req, res) => {
    let id = parseInt(req.params.id);

    let indice = funcionarios.findIndex((f) => f.id === id);

    if (indice === -1){
        return res.status(404).json({mensagem: "Funcionario não encontrado"})
    }

    funcionarios.splice(indice, 1);
    
    res.json({mensagem: "Funcionario removido com sucesso"});

});
module.exports = router;
var pessoa = {
    nome: 'Jaqueline',
    idade: 20,
    profissao: 'Geóloga'
};
pessoa.idade = 25;
var otavio = {
    nome: 'Otávio',
    idade: 25,
    profissao: 'Zootecnista'
};
var bruna = {
    nome: 'Bruna',
    idade: 35,
    profissao: "Advogada"
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedor"] = 2] = "Desenvolvedor";
    Profissao[Profissao["Zootecnista"] = 3] = "Zootecnista";
})(Profissao || (Profissao = {}));
var vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Professora
};
var maria = {
    nome: 'Maria',
    idade: 25,
    profissao: Profissao.Professora
};
var jessica = {
    nome: 'Jéssica',
    idade: 20,
    profissao: Profissao.Professora,
    materias: ['Matemática', 'Portugues']
};
var monica = {
    nome: 'Mônica',
    idade: 20,
    materias: ['Matemática', 'Física']
};
function listar(lista) {
    for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
        var item = lista_1[_i];
        console.log('•', item);
    }
}
listar(jessica.materias);

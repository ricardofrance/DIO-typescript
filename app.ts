const pessoa = {
    nome: 'Jaqueline',
    idade: 20,
    profissao: 'Geóloga'
}

pessoa.idade = 25;

const otavio: {nome: string, idade: number, profissao: string} = {
    nome: 'Otávio',
    idade: 25,
    profissao: 'Zootecnista'
}

const bruna: {nome: string, idade: number, profissao: string} = {
    nome: 'Bruna',
    idade: 35,
    profissao: "Advogada"
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedor,
    Zootecnista
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao,
}

interface Estudante extends Pessoa {
    materias: string[],
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Professora
}
const maria: Pessoa = {
    nome: 'Maria',
    idade: 25,
    profissao: Profissao.Professora
}

const jessica: Estudante = {
    nome: 'Jéssica',
    idade: 20,
    profissao: Profissao.Professora,
    materias: ['Matemática', 'Portugues']
}

const monica: Estudante = {
    nome: 'Mônica',
    idade: 20,
    materias: ['Matemática', 'Física']
}

function listar(lista: string[]){
    for (const item of lista){
        console.log('•', item);
    }
}

listar(jessica.materias);
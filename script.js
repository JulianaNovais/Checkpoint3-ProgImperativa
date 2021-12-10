// Micro desafio - Passo 3
// Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1).

// Micro desafio - Passo 4
// 	Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.

const listaDeAlunos = require('./module/listaAlunos')
const ConstAluno = require('./module/Aluno')

let curso = {
  nome: 'Prog Imperativa',
  notaAprov: 6,
  maxFaltas: 4,
  listaAlunos: listaDeAlunos.alunos,
  addAluno: function (nome, qtdFaltas, notas) {
    const novoAluno = new ConstAluno(nome, qtdFaltas, notas)
    this.listaAlunos.push(novoAluno)
  },
  foiAprovado: function (nome) {
    for (let aluno of this.listaAlunos) {
      if (aluno.nome.toUpperCase() === nome.toUpperCase()) {
        if (
          listaDeAlunos.calcularMedia(aluno.nome) >= this.notaAprov &&
          aluno.qtdFaltas < this.maxFaltas
        ) {
          // console.log(`aprovado`)
          return true
        } else if (
          aluno.qtdFaltas == this.maxFaltas &&
          listaDeAlunos.calcularMedia(aluno.nome) >= this.notaAprov * 1.1
        ) {
          // console.log(
          //   `aprovado com media 10% maior, mas com faltas igual ao maximo`
          // )
          return true
        } else {
          // console.log(`reprovado`)
          return false
        }
      }
    }
  },
  alunosAprovados: function () {
    let resultado = []
    for (let aluno of this.listaAlunos) {
      if (this.foiAprovado(aluno.nome)) {
        resultado.push({ aluno: aluno.nome, aprovado: true })
      } else {
        resultado.push({ aluno: aluno.nome, aprovado: false })
      }
    }
    return resultado
  },
}

curso.addAluno('João', 0, [8, 7, 10])
curso.addAluno('Pedro', 9, [8, 8, 5])
curso.addAluno('Tiago', 2, [8, 8, 5])

// metodo/propriedades "listaAlunos":
// console.log(listaDeAlunos.calcularMedia('PEDRO'))
// console.log(listaDeAlunos.faltas('JOÃO'))

// metodos/propriedades "curso":
// console.log(curso)
// console.log(curso.listaAlunos)
// curso.addAluno('Kleber', 2, [2, 7, 6])
// console.log(curso.listaAlunos)
// console.log(curso.foiAprovado('JOÃO'))
console.log(curso.alunosAprovados())
// ----------------------------------------------------------------------------------

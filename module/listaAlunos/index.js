// Micro desafio - Passo 1
// Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno.

// Micro desafio - Passo 2
// Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.

const ConstAluno = require('../Aluno')

let aluno1 = new ConstAluno('Juliana', 2, [8, 9, 8])
let aluno2 = new ConstAluno('David', 4, [5, 7, 5])
let aluno3 = new ConstAluno('Igor', 8, [5, 5, 10])
let aluno4 = new ConstAluno('Paulo', 5, [10, 10, 10])

let listaAlunos = {
  alunos: [aluno1, aluno2, aluno3, aluno4],
  calcularMedia: function (nome) {
    for (let i = 0; i < this.alunos.length; i++) {
      // verifica o nome do aluno e calcula a media
      if (this.alunos[i].nome.toUpperCase() === nome.toUpperCase()) {
        const aluno = this.alunos[i]
        let total = 0
        let media = 0
        for (let i = 0; i < aluno.notas.length; i++) {
          total += aluno.notas[i]
        }
        media = total / aluno.notas.length
        return media.toFixed(2)
        // console.log(`Media do aluno(a) ${aluno.nome} é: ${media}`)
      }
    }
  },
  faltas: function (nome) {
    // verifica o nome do aluno e adicona falta
    for (let i = 0; i < this.alunos.length; i++) {
      if (this.alunos[i].nome.toUpperCase() === nome.toUpperCase()) {
        const aluno = this.alunos[i]
        // console.log(
        //   `Adicionado falta ao aluno(a) ${aluno.nome} e ele(a) possui ${
        //     aluno.qtdFaltas + 1
        //   } faltas.`
        // )
        return aluno.qtdFaltas + 1
      }
    }
  },
}

// console.log(listaAlunos.calcularMedia('juliana'))
// console.log(aluno.calcularMedia())
// console.log(listaAlunos.faltas('juliana'))
// let constAluno = Aluno
// module.exports = constAluno
// console.log(listaAlunos.calcularMedia())

module.exports = listaAlunos

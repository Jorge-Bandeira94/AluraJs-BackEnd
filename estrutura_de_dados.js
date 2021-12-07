// medias 10, 6.5, 8, 7.5
// Modo simples
//let nota1 = 10
//let nota2 = 6.5
//let nota3 = 8
//let nota4 = 7.5

//let media = (nota1 + nota2 + nota3 + nota4) / 4
//console.log(media)

// Agora vamos trabalahr com codigo estruturado, usando uma lista

const notas = []

function colocaNota(nota) {
  notas.push(nota)
  console.log('Nota inserida')
  console.log('--------')
}

function media() {
  let somatorio = 0
  let quantidade = 0
  for (i in notas) {
    somatorio += notas[i]
    quantidade++
  }
  console.log(somatorio / quantidade)
}

colocaNota(8)
colocaNota(7)
colocaNota(10)
media()

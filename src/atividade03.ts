/*Crie um algoritmo que leia uma quantidade `n` de números inteiros fornecida pelo usuário e armazene esses números em um vetor. O
algoritmo deve parar de solicitar valores, quando o usuário digitar o numero 0. Ao final, o algoritmo deve calcular e imprimir a média
desses números, a soma de todos os números o maior e menor digitado. (Desconsiderar o 0).

---*/

import leia from "readline-sync"

export default function atividade03() {
let valores: number [] = [];
let media: number;
let soma: number = 0
let vlrMaior: number = Number.MIN_VALUE
let vlrMenor: number = Number.MAX_VALUE

let contar = 0;
let ctrl = true;

do{
  let valorRecebido = leia.questionInt("Informe um valor Inteiro diferente de 0:")
  if(valorRecebido !== 0){
    contar++
    valores.push(valorRecebido) 
  }

  if(valorRecebido === 0){
    ctrl = false
  }

  if(valorRecebido > vlrMaior)[
    vlrMaior = valorRecebido
  ]

  if(valorRecebido < vlrMenor){
    vlrMenor = valorRecebido
  }

  soma += valorRecebido

}while(ctrl)

media = soma / contar

console.log(`A media dos valores ficou em ${media.toFixed(2)}`)
console.log(`Foram digitados ${contar} valores, tendo um total de ${soma}`)
console.log(`Estes foram todos os valores ${valores}`)
}
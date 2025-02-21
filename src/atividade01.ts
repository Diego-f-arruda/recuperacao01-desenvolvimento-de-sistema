/*Crie um algoritmo para um calcular o valor de uma hospedagem. Você deve solicitar ao usuário a quantidade de diárias 
e também a idade do hospede. Com essas informações você calcular o valor total da diária com base na tabela de preço abaixo. 
Além disso, você deve levar em consideração que caso a pessoa tenha mais de 60 anos, ela terá um desconto de 20%. 
Ao final o algoritmo deve informar o valor total da hospedagem.

    Menor ou igual a 5 dias - R$100,00 a diária
    De 6 até 10 dias - R$90,00 a diária
    A partir de 11 dias - R$80,00 a diária

---*/
import leia from "readline-sync"

export default function atividade01() {

  let dias: number = leia.questionInt("Quantos dias irá ficar hospedado? ");
  let idade: number = leia.questionInt("Qual a idade do cliente? ");
  let valorFinal: number;

  if(dias <= 5){
    valorFinal = dias * 100
  }else if(dias > 5 && dias <= 10){
    valorFinal = dias * 90
  }else{
    valorFinal = dias * 80
  }

  if(idade >= 60){
    valorFinal *= 0.8
  }


  console.log(`O total de ${dias} dias, ficara no valor de R$${valorFinal},00`)

}
/*Você deve desenvolver um algoritmo para conversão de temperaturas. Você deve solicitar ao usuário a unidade de medida de origem, 
a temperatura, e a unidade de medida para qual deseja fazer a conversão. Nesse momento você deve levar em consideração 
apenas 3 unidades de medida Celsius, Kelvin e Fahrenheit. No final o algoritmo deve informar a temperatura na unidade de 
medida escolhida.

Celsius para Fahrenheit = F = (C * 1.8) + 32 Fahrenheit para Celsius = C = (F - 32) * (5/9)

Celsius para Kelvin = K = C + 273.15 Kelvin para Celsius = C = K - 273.15

Celsius para Kelvin = K = (F - 32) * (5/9) + 273.15 Kelvin para Fahrenheit = F = (K - 273.15) * 1.8 + 32

---*/

import leia from "readline-sync"

export default function atividade02() {
  
  console.log("Informe de qual para qual unidade de medida deseja converter.");
  var opcao = leia.keyInSelect(["Celsius => Fahrenheit", "Fahrenheit => Celsius", " Celsius => Kelvin", "Kelvin => Celsius", "Fahrenheit => Kelvin", "Kelvin => Fahrenheit" ]) + 1;
  var uMedida2;
  
  function opcaoTemperatura(){
      var uMedida1 = leia.questionFloat("Informe a temperatura: ");
        return uMedida1
  }
  switch(opcao){
      case 1:
          uMedida2 = (opcaoTemperatura() * 1.8) + 32;
          console.log(uMedida2);
      break;
      case 2:
            uMedida2 = (opcaoTemperatura() - 32) * (5/9);
            console.log(uMedida2);
      break;
      case 3:
          uMedida2 = opcaoTemperatura() + 273.15;
          console.log(uMedida2);
      break;
      case 4:
          uMedida2 = opcaoTemperatura() - 273.15;
          console.log(uMedida2);
      break;
      case 5:
          uMedida2 = (opcaoTemperatura() - 32) * (5/9) + 273.15;
          console.log(uMedida2);
      break;
      case 6:
          uMedida2 = (opcaoTemperatura() - 273.15) * 1.8 + 32;
          console.log(uMedida2);
      break;
      
  }

}
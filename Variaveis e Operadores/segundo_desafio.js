/* Faça um programa para calcular o valor gasto de combustivel em uma viagem.
 Você terá 3 variáveis. Sendo elas:
  -Preço da gasolina;
  -Preço do etanol;
  -O tipo de cobustivel que está usando no seu carro;
  -Gasto médio de combustivel do carro por KM;
  -Distância em KM da viagem;

 Imprima no console o valor que será gasto de combustivel para realizar esta viagem.
 */


const precoGasolina = 6.66;
const precoEtanol = 5.79;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = "Gasolina";

const litrosConsumidos = distanciaEmKm / kmPorLitros;



if(tipoCombustivel === "Etanol"){
    const valorGasto = litrosConsumidos * precoEtanol ; 
    console.log(valorGasto.toFixed(2)); 
}else{
    const valorGasto = litrosConsumidos * precoGasolina ;
    console.log(valorGasto.toFixed(3)); 

}
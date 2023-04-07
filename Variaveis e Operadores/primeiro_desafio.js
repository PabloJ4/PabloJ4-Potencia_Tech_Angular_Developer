/* Faça um programa para calcular o valor gasto de combustivel em uma viagem.
 Você terá 3 variáveis. Sendo elas:
  -Preço do Combustível;
  -Gasto médio de combustivel do carro por KM;
  -Distância em KM;

 Imprima no console o valor que será gasto de combustivel para realizar esta viagem.
 */


const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));



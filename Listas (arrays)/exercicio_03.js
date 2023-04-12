/*
3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".
*/

let listasNome = ["Vanessa", 'Henrique']

let letraPesquisa = 'v'
const temLetraInicial  = (lista, letraBusca) =>  lista.split("")[0].toLowerCase() ===letraBusca.toLowerCase() 
for (const nome of listasNome) {
    if (temLetraInicial(nome, letraPesquisa) ){
      console.log(nome)
    } 
}
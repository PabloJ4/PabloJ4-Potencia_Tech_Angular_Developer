
const offset = 0
const limit = 10

const url = 'https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}'

function convertPokemonToli(pokemon){
    return
       <li class="pokemon">
           <span class="number">#001</span>
           <span class="name">Bulbasaur</span>

           <div class="detail">
                <ol class="types">
                  <li class="type">grass</li>
                  <li class="type">poison</li>
               </ol>

                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="Bulbasaur">

            </div>
    
         </li>
    
}

const pokemonList = document.getElementById('pokemonList')



fetch(url)
.then((response) => response.json())
.then((jsonBody) => jsonBody.results)
.then((pokemon) =>{
    for(let i=0; i<pokemon.length; i++){
        const pokemon = pokemon[i];
        pokemonList.innerHTML += convertPokemonToli(pokemon)
    }
}) 
.catch((error) => console.error(error))
    

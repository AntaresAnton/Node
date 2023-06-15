console.clear();
console.log('inicio')
// let id = 25;
const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`
const fetchPokemon = ()=>{
    const generatePokemonPromises = () => Array(150).fill().map((_, index)=>{
        fetch(getPokemonUrl(i)).then(response =>response.json())
    }

    // const pokemonPromises=[]

    // for (let i = 1; i <=150; i++) {
    //     pokemonPromises.push(fetch(getPokemonUrl(i)).then(response =>response.json()))
    // }

    // fetch(url)
    // .then(response =>response.json())
    // .then(pokemon=>{
    //     console.log(pokemon)
    // })
    Promise.all(pokemonPromises)
    .then(pokemons =>{
        // console.log(pokemons)
        const lisPokemons = pokemons.reduce((accumulator,pokemon)=>{
            const types = pokemon.types.map(typeInfo => typeInfo.type.name)
            accumulator += `
            <li class="card ${types[0]} w-25">
            <img class="card-image" alt="${pokemon.name}" src="https://pixelmon.site/images/pokemon/${pokemon.name}.png" />
                <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
                <p class="card-subtitle">${types.join(' | ')}</p>
            </li>
            `
            return accumulator
        }, '')

        const ul = document.querySelector('[data-js="pokedex"]');

        ul.innerHTML = lisPokemons
        // console.log(lisPokemons)
    })
}


fetchPokemon();
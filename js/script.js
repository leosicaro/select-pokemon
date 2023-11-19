
const button            = document.getElementById("get-pokemon");
const container         = document.getElementById("container")
const pokemon_select    = document.getElementById("pokemon-select")
let pokemonSeleccionado = pokemon_select.value;
console.log(pokemonSeleccionado)


button.addEventListener("click",()=>{
   
   pokemonSeleccionado = pokemon_select.value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSeleccionado}`)
 .then((response)=>{
        if (!response.ok){
            throw new Error("La solicitud no fue exitosa");
        }
        return response.json()
     })
.then((data) => {
        let datosPokemon = [data]
        console.log(datosPokemon)
        for (const datoPokemon of datosPokemon) {
         let listItem = `
         <li>
         <p><span>Nombre: </span>${datoPokemon.name}</p>
         <p> <img src="${datoPokemon.sprites.front_default}" alt='${datoPokemon.name}' />
         <p><span> <height:<span>${datoPokemon.height}</p>
         <p><span> <weight:<span>${datoPokemon.weight}</p>
         <p><span>Tipo: </span>${datoPokemon.types?.[0]?.type?.name}</p>
         </li>`;
       
         container.innerHTML = listItem;}});
        })

     



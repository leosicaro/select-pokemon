const bulbasaur  = document.getElementsByTagName("bulbasaur")
const charmander = document.getElementsByTagName("charmander")
const squirtle   = document.getElementsByTagName("squirtle");
const button     = document.getElementById("get-pokemon");
const container  = document.getElementById("container")

button.addEventListener("click",()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/charmander`)
 .then((response)=>{
        if (!response.ok){
            throw new Error("La solicitud no fue exitosa");
        }
        return response.json()
     })
.then((data) => {
        let datosPokemon = data
        datosPokemon.forEach(datoPokemon => {
    
           let listItem= `
          <li> 
          <p><span>Nombre: </span>${datoPokemon.name}</p>
          <p>  <img src="${datoPokemon.sprites.front_default}" alt='${datoPokemon.name}' />
          <p><span> <height:<span>${datoPokemon.height}</p>
          <p><span> <weight:<span>${datoPokemon.weight}</p>
          <p><span>Especie: </span>${datoPokemon.species}</p>
        </li>`
        container.innerHTML = listItem
        });
   })
});
     



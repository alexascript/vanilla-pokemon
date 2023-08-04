// import "./styles.css";

const urls = [
  "https://pokeapi.co/api/v2/pokemon-form/1",
  "https://pokeapi.co/api/v2/pokemon-form/2",
  "https://pokeapi.co/api/v2/pokemon-form/3",
  "https://pokeapi.co/api/v2/pokemon-form/4",
  "https://pokeapi.co/api/v2/pokemon-form/5",
  "https://pokeapi.co/api/v2/pokemon-form/6",
];

// fetch api con async await

const fetchPokemonsAsync = async (url) => {
  const data = await fetch(url);
  const dataJson = await data.json();
  return dataJson;
};

// infoHandler
// variable global donde vamos a guardar la informacion proveniente del API
let pokemons = [];

// Paso 3
// se genera las targetas y el core del proyecto
// usando .reducer dado que el rooot del proyecto no se puede pasar un array
const generateCards = (pokemons) => {
  // convertimos el array de pokemons en un array de strings con el html
  const cards = pokemons.map(
    (pokemon) => `
  <div class="card" id="id-${pokemon.id}">
    <h1>${pokemon.name}</h1>
    <img src='${pokemon.sprites.front_default}' class="pokeImg"/>
  </div>
  `
  );

  // convertimos el array en un solo string
  const html = cards.join("");
  return html;
};

(async () => {
  // resolver todas las promesas del array de promesas
  const pokemon0 = await fetchPokemonsAsync(urls[0]);
  const pokemon1 = await fetchPokemonsAsync(urls[1]);
  const pokemon2 = await fetchPokemonsAsync(urls[2]);
  const pokemon3 = await fetchPokemonsAsync(urls[3]);
  const pokemon4 = await fetchPokemonsAsync(urls[4]);
  const pokemon5 = await fetchPokemonsAsync(urls[5]);

  pokemons = [pokemon0, pokemon1, pokemon2, pokemon3, pokemon4, pokemon5];
  // Paso 2:

  console.log(pokemons);

  // // se llama la funcion que genera los card  con base en la
  // // data obtenida del fetch
  const cards = generateCards(pokemons);
  console.log(cards);
  // // se agrega un contenedor para mejor css
  const container = `
    <section class="container">
    ${cards}
    </section>
  `;
  // // se inyecta las targetas en el root del proyecto

  document.getElementById("app").innerHTML = container;
})();

// se agrega el event lisener sobre los click en genral
document.addEventListener("click", (event) => {
  console.log("click");
  // se filtra las acccion que correspondan a click sobre las cards
  if (event.target.matches(".card")) {
    console.log("pass");
    const id = event.target.id;
    // se busca en el arreglo de objetos el  id que corresponda
    // con el id de la targeta clickeada para saber que informacion es la
    // ques se debe inyectar

    const pokemonClicked = pokemons.find((pokemon) => {
      return id === `id-${pokemon.id}`;
    });
    // se busca si en el elemento que disparo la accion ya existe
    // la descripcion y de esta manera determinar si se debe inyectar o
    // eliminar
    const descriptionLength =
      event.target.querySelectorAll(`.description`).length;

    if (descriptionLength > 0) {
      // si la descripcion ya existe se elimina buscando en todo
      // el documento por id ten encuenta que es unico en todo el proyecto
      var elem = document.getElementById(pokemonClicked.id);
      // se elimina dicho nodo del proyecto
      elem.parentNode.removeChild(elem);
    } else {
      // dado que no existe la descripcion se crea el elemento con
      // las propiedades necesaria como el id unico
      const description = document.createElement("p");
      description.className = "description";
      description.id = pokemonClicked.id;
      // se inyecta en el elemento creado la informacion
      description.innerHTML = "Descripcion del pokemon";
      // se inyecta el elemento creado debajo (append) de
      // la targeta que se busca en todo el documento por su id unico
      // el id se obtiene del elemento que disparo el evento
      document.getElementById(id).append(description);
    }
  }
});

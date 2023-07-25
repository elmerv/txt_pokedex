// list of pokemon
const pokemon = [
  {
    id: 1,
    name: "Bulbasaur",
    img: "https://66.media.tumblr.com/tumblr_m9xtytGQk51rfjowdo1_r1_500.gif",
    description: `Bulbasaur (Japanese: フシギダネ Fushigidane) is a dual-type Grass/Poison Pokémon introduced in Generation I.
     It evolves into Ivysaur starting at level 16, which evolves into Venusaur starting at level 32.`,
    textColor: "#90D0B4",
    backgroundColor: "#B7F870"
  },
  {
    id: 2,
    name: "Charmander",
    img: "https://66.media.tumblr.com/tumblr_ma0tijLFPg1rfjowdo1_500.gif",
    description: `Charmander (Japanese: ヒトカゲ Hitokage) is a Fire-type Pokémon introduced in Generation I.
     It evolves into Charmeleon starting at level 16, which evolves into Charizard starting at level 36.`,
    textColor: "#F8D068",
    backgroundColor: "#E1632A"
  },
  {
    id: 3,
    name: "Squirtle",
    img: "https://66.media.tumblr.com/tumblr_ma4ft6OXxw1rfjowdo1_500.gif",
    description: `Squirtle (Japanese: ゼニガメ Zenigame) is a Water-type Pokémon introduced in Generation I.
     It evolves into Wartortle starting at level 16, which evolves into Blastoise starting at level 36.`,
    textColor: "#5A9BA4",
    backgroundColor: "#B4E7EF"
  },
  {
    id: 4,
    name: "Pikachu",
    img:
      "https://66.media.tumblr.com/927365f0bbdd1f3d2f852bac8759f89b/tumblr_mh8a7wx1WG1rfjowdo1_r2_500.gif",
    description: `Pikachu (Japanese: ピカチュウ Pikachu) is an Electric-type Pokémon introduced in Generation I.
     It evolves from Pichu when leveled up with high friendship and evolves into Raichu when exposed to a Thunder Stone.`,
    textColor: "#F6E751",
    backgroundColor: "#F7BC21"
  },
  {
    id: 5,
    name: "Mew",
    img:
      "https://i.pinimg.com/originals/8d/8d/cb/8d8dcb9d29e7a7348aaade8e2b2d332e.gif",
    description: `Mew (Japanese: ミュウ Mew) is a Psychic-type Mythical Pokémon introduced in Generation I. 
     It is not known to evolve into or from any other Pokémon.`,
    textColor: "#FFB1D2",
    backgroundColor: "#FFD3ED"
  }
];

var currentPokemonIndex = 0;

// Get dropdown elem
var dropdownElem = document.getElementById("dropdown");
// Get title elem
var pokemonTitle = document.getElementById("name");
// Get image elem
var pokemonImg = document.getElementById("image");
// Get pokemon description
var pokemonDesc = document.getElementById("desc");

// Note: This was done in order to remove warning msg.
var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");

/**
 * Loop through pokemon list and render dropdown items
 */
for (let i = 0; i < pokemon.length; i++) {
  var option = document.createElement("option");
  option.text = pokemon[i].name;
  option.value = pokemon[i].id;
  dropdownElem.add(option);
}
dropdownElem.onchange = onDropdownSelect;
nextButton.onclick = next;
prevButton.onclick = prev;

/**
 * Write function that listens for changes in dropdown select
 *
 * When user selects a new pokemon, update the pokemon card details (name, image, desc)
 * to reflect the new seletion
 */
function onDropdownSelect(e) {
  currentPokemonIndex = e.target.value - 1;
  var selectedPokemon = pokemon[currentPokemonIndex];
  changePokemonContent(selectedPokemon);
}

/**
 * Write function that sets the previous pokemon as
 * the active pokemon
 */
function prev() {
  currentPokemonIndex = mod(currentPokemonIndex - 1, pokemon.length);
  var selectedPokemon = pokemon[currentPokemonIndex];
  changePokemonContent(selectedPokemon);
}

/**
 * Write function that sets the next pokemon as
 * the active pokemon
 */
function next() {
  currentPokemonIndex = mod(currentPokemonIndex + 1, pokemon.length);
  var selectedPokemon = pokemon[currentPokemonIndex];
  changePokemonContent(selectedPokemon);
}
/**
 *
 * @param {object} selectedPokemon
 * This just changes the content. The parameter is an the pokemon object
 */
function changePokemonContent(selectedPokemon) {
  pokemonTitle.innerHTML = selectedPokemon.name;
  pokemonDesc.innerHTML = selectedPokemon.description;
  pokemonImg.src = selectedPokemon.img;
  dropdownElem.value = currentPokemonIndex + 1;
  pokemonTitle.style.color = selectedPokemon.textColor;
  dropdownElem.style.borderColor = selectedPokemon.textColor;
  prevButton.style.backgroundColor = selectedPokemon.textColor;
  nextButton.style.backgroundColor = selectedPokemon.textColor;
  document.body.style.background = selectedPokemon.backgroundColor;
}

function mod(a, n) {
  return a - n * Math.floor(a / n);
}

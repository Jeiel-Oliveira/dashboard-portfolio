import React from 'react';

import ListPokemon from 'view/Pokemon/ListPokemon';
import Pokemon from 'view/Pokemon/Pokemon';

import Home from 'view/Home';

const homeinfo = {
  key: 1,
  name:"Home",
  path:"/home",
  component: () => <Home />
}

const listPokemon = {
  key: 2,
  name: "Pokemons",
  path: "/pokemons",
  component: () =>  <ListPokemon />
}

const pokemon = {
  key: 3,
  name: "Pokemon",
  path: "/pokemon/:name",
  hide: true,
  component: () => <Pokemon />
}

const routes = [ homeinfo, listPokemon, pokemon ]

export default routes
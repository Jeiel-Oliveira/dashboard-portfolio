import React from 'react';
import SearchPokemon from 'view/ListPokemon';
import Home from 'view/Home';

const homeinfo = {
  key: 1,
  name:"Home",
  path:"/home",
  component: () => <Home />
}

const pokeapi = {
  key:2,
  name:"Pokeapi",
  path:"/pokemons",
  component: () =>  <SearchPokemon />
}

const routes = [ homeinfo, pokeapi ]

export default routes
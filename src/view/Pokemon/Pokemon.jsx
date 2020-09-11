import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import CardGradient from 'components/Commom/Cards/cardGradient';

import pokeapi from 'consumers/pokemon';

import pokemonColor from 'utils/pokemonColor';
import { TypeSpan } from './styled';

function Pokemon() {

  const [pokemon, setPokemon] = useState(null)

  const { name } = useParams();

  useEffect(() => {

    getPokemon(name);

  }, [name])

  const getPokemon = async (name) => {

    try {
      const response = await pokeapi.pokemon(name)
      setPokemon(response)
    } catch (err) {
      console.log(err)
    }

  }

  return (
    <div className="grid-two-cards">

      {pokemon && (
        <>
          <CardGradient className="text-center" color={pokemonColor[pokemon.types[0].type.name]}>
            <h1 className="title-pokemon">{pokemon.name}</h1>

            <div className="types-margin flex-full-center">
              {pokemon.types.map((item, index) => (
                <TypeSpan key={index} color={pokemonColor[item.type.name]}>{item.type.name}</TypeSpan>
              ))}
            </div>

            <div className="grid-two-cards">

              <div className="flex-full-center">
                <div className="circle-behind" />
                <img src={pokemon.sprites.front_default} className="card-with-image" alt="Pokemon da série que começou nos jogos." />
              </div>

              <ul className="list-pokemon">
                {pokemon.stats.map((status, index) => (
                  <li key={index} className="li-pokemon flex"><span className="flex-auto">{status.stat.name}</span><span className="text-right">{status.base_stat}</span></li>
                ))}
              </ul>

            </div>
          </CardGradient>

          <CardGradient color={pokemonColor[pokemon.types[0].type.name]} className="text-center">
            <h1 className="title-pokemon text-center">shiny - Moves</h1>

            <div className="types-margin flex-full-center color-black">
              {pokemon.abilities.slice(0, 2).map((ability, index) => (
                <TypeSpan key={index} color={`${pokemonColor[pokemon.types[0].type.name]}900`} className="color-black">{ability.ability.name}</TypeSpan>
              ))}
            </div>

            <div className="grid-two-cards">

              <div className="flex-full-center">
                <div className="circle-behind transform-45-neg" />
                <img src={pokemon.sprites.front_shiny} alt="shiny pokemon" className="card-with-image" />
              </div>

              <ul className="list-pokemon list-moves flex-column-center">
                {pokemon.moves.slice(0, 4).map((move, index) => (
                  <li key={index} className="li-pokemon-moves text-center">{move.move.name}</li>
                ))}
              </ul>
            </div>

          </CardGradient>
        </>
      )}
    </div>
  )
}

export default Pokemon
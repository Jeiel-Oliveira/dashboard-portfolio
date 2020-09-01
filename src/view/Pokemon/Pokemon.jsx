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

            <div className="types-margin">
              {pokemon.types.map((item) => (
                <TypeSpan color={pokemonColor[item.type.name]}>{item.type.name}</TypeSpan>
              ))}
            </div>

            <div className="grid-two-cards">

              <div className="flex-full-center">
                <div className="circle-behind" />
                <img src={pokemon.sprites.front_default} className="card-with-image" alt="Pokemon da série que começou nos jogos." />
              </div>

              <ul className="list-pokemon">
                {pokemon.stats.map((status) => (
                  <li className="li-pokemon flex"><span className="flex-auto">{status.stat.name}</span><span className="text-right">{status.base_stat}</span></li>
                ))}
              </ul>

            </div>
          </CardGradient>

          <CardGradient color={pokemonColor[pokemon.types[0].type.name]}>
            <div>batata</div>
          </CardGradient>
        </>
      )}
    </div>
  )
}

export default Pokemon
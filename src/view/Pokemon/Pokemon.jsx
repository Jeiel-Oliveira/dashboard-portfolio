import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import CardBase from 'components/Commom/Cards/cardBase';

import pokeapi from 'consumers/pokemon';

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
    } catch(err) {
      console.log(err)
    }

  }

  return (
    <div className="grid-two-cards">

      <CardBase>
        {pokemon && (
          <>
            <img src={pokemon.sprites.front_default} />

            <ul>
              {pokemon.stats.map((status) => (
                <li>{status.stat.name} - {status.base_stat}</li>
              ))}
            </ul>
          </>
        )}
      </CardBase>

      <CardBase>
        <div>batata</div>
      </CardBase>

    </div>
  )
}

export default Pokemon
import React, { useState, useEffect } from 'react';

import pokemon from 'consumers/pokemon';

import CardInfo from 'components/Commom/Cards/cardInfo';
import Button from 'components/Commom/Buttons/button';

import { useHistory } from 'react-router-dom';

function SearchPokemon() {

    const [pokemons, setPokemons] = useState([])
    const [offset, setOffeset] = useState(0)

    const makeQuery = () => {
      let query = ''

      if(offset) query += `?offset=${offset}`

      return query
    }

    const history = useHistory();

    useEffect(() => {
      getPokemons();
    }, [offset])

    const getPokemons = async () => {
      const query = makeQuery();
      const listPokemons = await pokemon.list(query)

      setPokemons(listPokemons)
    }    

    return (
      <div className="grid-container">
        {pokemons.map((value) =>
          <CardInfo
            title={value.name}
            className="grid-item">
              <Button onClick={() => history.push(`pokemon/${value.name}`)} text="Ver mais" />
          </CardInfo>
        )}
      </div>
    )
}

export default SearchPokemon
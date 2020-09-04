import React, { useState, useEffect } from 'react';

import pokeapi from 'consumers/pokemon';
import pokemonColor from 'utils/pokemonColor';

import CardInfo from 'components/Commom/Cards/cardInfo';
import Button from 'components/Commom/Buttons/button';
import Pagination from 'components/Commom/pagination';

import { useHistory } from 'react-router-dom';

function ListPokemon() {

    const [pokemons, setPokemons] = useState([])
    const [pokeDatas, setPokeDatas] = useState([])
    const [page, setPage] = useState(1)

    const OFFSET = 9;
    const LIMIT = 9;
    const MAXCOUNTPOKEMON = 893;

    const [pagination, setPagination] = useState({})

    const convertPageToOffset = (page, limit) => {

      if(page === 1) return 0;

      const offsetBase = page * OFFSET;
      
      return offsetBase;
    }

    const makeQuery = () => {
      let query = ''
          
      convertPageToOffset(page, )

      query += `?limit=${LIMIT}`
      if(page) query += `&offset=${convertPageToOffset(page, LIMIT)}`

      return query
    }

    const history = useHistory();

    useEffect(() => {
      getPokemons();
    }, [page])

    const makePagination = (response) => {

      const pagination = response
      if(pagination.results) delete pagination.results

      setPagination(pagination)
    }

    const getPokemons = async () => {
      const query = makeQuery();
      const response = await pokeapi.list(query)

      const listPokemons = response.results
      
      makePagination(response)

      const pokemons = []

      const promises = Promise.all(listPokemons.map((item) => pokeapi.pokemon(item.name)))
      .then((resp) => {
        resp.forEach((item) => {
          pokemons.push(item)
        })
      })

      await promises
    
      setPokeDatas(pokemons)
      setPokemons(listPokemons)
    }

    return (
      <>
        <div className="grid-container">
          {pokemons.map((value, index) =>
            <CardInfo
              color={pokemonColor[pokeDatas[index].types[0].type.name]}
              key={index}
              title={value.name}
              className="grid-item">
                <div className="flex-full-center">
                  <div className="circle-behind" />
                  <img src={pokeDatas[index].sprites.front_default} alt="Imagem dos pokemons" className="card-with-image" />                
                </div>

                <Button onClick={() => history.push(`pokemon/${value.name}`)} text="Ver mais" />
            </CardInfo>
          )}
        </div>

        <Pagination
          limit={LIMIT}
          page={page}
          count={MAXCOUNTPOKEMON}
          onPageChange={(value) => setPage(value)}
        />
      </>
    )
}

export default ListPokemon
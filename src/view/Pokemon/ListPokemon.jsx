import React, { useState, useEffect } from 'react';
import { Pagination } from 'semantic-ui-react';
import swal from 'utils/alerts';

import pokeapi from 'consumers/pokemon';
import pokemonColor from 'utils/pokemonColor';

import CardInfo from 'components/Commom/Cards/cardInfo';
import Button from 'components/Commom/Buttons/button';

import { useHistory } from 'react-router-dom';

function ListPokemon() {

    const [pokemons, setPokemons] = useState([])
    const [pokeDatas, setPokeDatas] = useState([])
    const [page, setPage] = useState(1)

    const OFFSET = 9;
    const LIMIT = 9;
    const MAXCOUNTPOKEMON = 893;

    const convertPageToOffset = (page) => {

      if(page === 1) return 0;
      const offsetBase = page * OFFSET;
      return offsetBase;
    }

    const history = useHistory();

    useEffect(() => {

      const makeQuery = () => {
        let query = ''

        query += `?limit=${LIMIT}`
        if(page) query += `&offset=${convertPageToOffset(page)}`

        return query
      }
      
      const getPokemons = async () => {
        const query = makeQuery();
  
        swal.loading(true);
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
        swal.loading(false);
  
        setPokeDatas(pokemons)
        setPokemons(listPokemons)
      }

      getPokemons();
    }, [page])

    const makePagination = (response) => {

      const pagination = response
      if(pagination.results) delete pagination.results
    }

    const handlePaginationChange = (e, { activePage }) => setPage(activePage)

    

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
          style={{ margin: '15px 0' }}
          defaultActivePage={1}
          onPageChange={handlePaginationChange}
          pointing
          secondary
          totalPages={Math.round(MAXCOUNTPOKEMON / LIMIT)}
        />
      </>
    )
}

export default ListPokemon
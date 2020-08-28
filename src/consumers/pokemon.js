import api from 'services/pokeapi'

const pokemon = {

  list: async (query) => {

    try {
      const response = await api.get(`/pokemon${query}`)

      return response.data.results
    } catch(err) {
      if(!err.response) {
        throw new Error("Falha ao fazer requisição")
      }

      throw new Error(err)
    }

  }

}

export default pokemon
import api from 'services/pokeapi'

const pokeapi = {

  list: async (query) => {

    try {
      const response = await api.get(`/pokemon${query}`)

      return response.data
    } catch(err) {
      if(!err.response) {
        throw new Error("Falha ao fazer requisição")
      }

      throw new Error(err)
    }

  },

  pokemon: async (name) => {

    try {
      const response = await api.get(`/pokemon/${name}`) 

      return response.data
    } catch(err) {
      if(!err.response) {
        throw new Error("Falha ao fazer requisição")
      }

      throw new Error(err)
    }

  }

}

export default pokeapi
import axios from 'axios'

class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`)
            console.log(response)
        } catch(err) {
            throw new Error('Erro ao buscar usuário')
        }
    }
}

Api.getUserInfo('xdasdsafsafgsaf')
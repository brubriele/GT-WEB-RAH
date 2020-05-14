const API_URL = 'https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog'

export const doGet = (path) => {
    const url = `${API_URL}${path}`
    return fetch(url)
        .then(response => response.json)
}

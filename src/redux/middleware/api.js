import Http from 'utils/http'

const API_ROOT = 'http://localhost:3000'

const request = (method, endpoint, payload) => {
  const baseUrl = API_ROOT + endpoint
  const params = { url: baseUrl }
  if (payload) {
    params.data = payload
  }
  return Http[method](params)
    .then(response => response.data)
    .catch(err => {
      throw err
    })
}

export const getAllBooks = () => {
  return request('get', '/books')
}

export const getBook = (bookId) => {
  const endpoint = `/books/${bookId}`
  return request('get', endpoint)
}

export const addBook = (book) => {
  return request('post', '/books', book)
}

export const updateBook = (book) => {
  const endpoint = `/book/${book.id}`
  return request('put', endpoint, book)
}

export const removeBook = (bookId) => {
  const endpoint = `/books/${bookId}`
  return request('remove', endpoint)
}

export const getAllBookStores = () => {
  return request('get', '/bookstores')
}

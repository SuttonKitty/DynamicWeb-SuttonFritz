import axios from 'axios'

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    // inside headers use your ACCESS KEY
    headers: {
      Authorization: 'Client-ID XLUoePrj4PGMfxu6qfJZLX6G4VG0ugM0xV-T2Bu9oBI',
    },
    params: {query: term},
  })
  console.log(response.data.results)
  return response.data.results
}

export default searchImages

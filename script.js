const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a20d8af5b75a461d3e3fa63cd3fc6ff7&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w500s'
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=a20d8af5b75a461d3e3fa63cd3fc6ff7&query="'

const form = document.getElementById('form')
// Get initial movies
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    console.log(data.results)
}


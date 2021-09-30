//TMDB
const API_KEY = 'api_key=e05df979b579533ecb91c6317e6c034a';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'
+API_KEY;

getMovie(API_URL);

function getMovie(url){
    fetch(url).then(res => res.json()).then(data => {

        showMovie(data.results);
    })
}

function showMovie(data){

  data.forEach(movie => {

      const movieEl = document.createElement('div');
      movieEl.classlist.add('');
      movieEl.innerHTML = ''

  })

}
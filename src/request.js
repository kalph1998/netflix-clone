const APIKEY = "03c7fa5a0da57565e73d21b9de16d30a";

const requests = {
  fetchTrending: `/trending/all/day?api_key=${APIKEY}`,

  fetchpopularTv: `/tv/popular?api_key=${APIKEY}&language=en-US&page=1`,
  fetchtopTv: `/tv/top_rated?api_key=${APIKEY}&language=en-US&page=1`,
  comedyTV: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
  horrorTv: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
  romanticTv: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
};

export default requests;

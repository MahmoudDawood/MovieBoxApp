import { useQuery } from '@tanstack/react-query';
import {REACT_APP_API_KEY} from '@env'

// The component that fetches the movies
function useMovies(searchWord: String) {
  const url = `https://api.themoviedb.org/3/movie/popular?include_adult=false&api_key=${REACT_APP_API_KEY}`
  const searchUrl = `https://api.themoviedb.org/3/search/movie?query=${searchWord}&include_adult=false&api_key=${REACT_APP_API_KEY}`

  // Use the useQuery hook to fetch movies
  return useQuery({
    queryKey: [`movies`, searchWord],
    queryFn: () => 
      fetch(searchWord.length ? searchUrl : url).then(res => res.json())
  });
};

export { useMovies }
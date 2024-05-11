import React from 'react';
import { ScrollView, Image, Text, View, StyleSheet } from 'react-native';
import MovieCard from './MovieCard';
import { useMovies } from '../services/useMovies';

const MoviesList: React.FC<MoviesListProps>= ({ searchTerm }) => {
  const { isPending, error, data: movies } = useMovies(searchTerm)
  if (isPending) return <Text>Loading...</Text>
  if (error) return <Text>An error occurred: {error.message}</Text>
  return (
    <ScrollView>
      {movies.results.map((movie: any) => (
        <MovieCard
          key={movie.id}
          movie={movie}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10
  },
  movieCard: {
    width: 120,
    marginRight: 8
  },
  image: {
    width: '100%',
    height: 180
  },
  movieTitle: {
    textAlign: 'center'
  }
});

export default MoviesList;

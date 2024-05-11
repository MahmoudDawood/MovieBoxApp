interface Movie {
  title: string;
  year: number;
  country: string;
  rating: string;
  category: string;
  imageUrl: string;
}

const Movies: Movie[] = [
];

interface MovieCardProps {
  release_date: string;
  vote_average: string;
  title: string;
  poster_path: string;
}

interface MoviesListProps {
  searchTerm: String
}

import './App.css';
import MovieList from './components/MovieList';
import movieData from './data/movies.json'

function App() {
  return (
    <div>
      <MovieList movies={movieData} />
    </div>
  );
}

export default App;
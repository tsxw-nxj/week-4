import {movies} from './movieDummy';
import Movie from'./components/Movie/Movie.jsx'; 



function App() {

  return (
    <div className="App">
      <div className="app-container">
        {
          movies.results.map((item) => {
            return(
              <Movie
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
                overview={item.overview}
              />
            )
          })
        }

      </div>
    </div>
  );
  
}
export default App;

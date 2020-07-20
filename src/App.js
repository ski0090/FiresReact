import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import"./App.css"
class App extends React.Component {
  state = {
    bIsLoading: true,
    mMovies:[]
  };
  getMovies = async() => {
    const {data:{data:{movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({mMovies:movies, bIsLoading:false});
    console.log(this.state.mMovies);
  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { bIsLoading,mMovies} = this.state;
    return  <section class="container" > {
        bIsLoading ? 
          <div class="loader">
             <span class="loader__text">Loading...</span>
          </div>:
          <div class="movies">
           {
            mMovies.map(movie => (
              <Movie 
                key={movie.id} 
                year={movie.year} 
                title={movie.title}
                summary={movie.summary} 
                poster={movie.medium_cover_image}/>
           ))}</div>
          } </section>;
  }
}
export default App;
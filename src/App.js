import React from "react";
import axios from "axios";
import Movie from "./movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    // console.log(movies.data.data.movies);
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
    //this.setState({ movies: movies });
    // key movies : state / value movies : getmovies()
  };
  componentDidMount() {
    // axios.get �ϴµ� �ð� �ɸ� - �׷��� �Լ� ���� �� �װ� �ٷ� ����������
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map((movie) => {
              console.log(movie);
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.poster}
                />
              );
            })}
      </div>
    );
  }
}

export default App;

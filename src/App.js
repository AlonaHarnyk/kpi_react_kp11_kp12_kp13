import { Component } from "react";
import movies from "./data/movies.json";
import { MoviesGallery } from "./components/MoviesGallery/MoviesGallery";
import Modal from "./components/Modal/Modal";
import { moviesMapper } from "./utils/mapper";

class App extends Component {
  state = {
    movies: moviesMapper(movies),
    currentPoster: null,
  };

  componentDidMount() {
    const savedMovies = localStorage.getItem("movies");
    if (savedMovies) {
      this.setState({ movies: JSON.parse(savedMovies) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { movies } = this.state;
    if (movies !== prevState.movies) {
      localStorage.setItem("movies", JSON.stringify(movies));
    }
  }

  deleteMovie = (moviedId) => {
    this.setState((prevState) => ({
      movies: prevState.movies.filter(({ id }) => id !== moviedId),
    }));
  };

  openModal = (poster) => {
    this.setState({ currentPoster: poster });
  };

  closeModal = () => {
    this.setState({ currentPoster: null });
  };

  render() {
    const { movies, currentPoster } = this.state;
    return (
      <>
        <MoviesGallery
          movies={movies}
          deleteMovie={this.deleteMovie}
          openModal={this.openModal}
        />
        {currentPoster && (
          <Modal currentPoster={currentPoster} closeModal={this.closeModal} />
        )}
      </>
    );
  }
}

export default App;

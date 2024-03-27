import { Component } from "react";

import { MoviesGallery } from "./components/MoviesGallery/MoviesGallery";
import Modal from "./components/Modal/Modal";
import { Button } from "./components/Button/Button";
import { Loader } from "./components/Loader/Loader";
import { Notification } from "./components/Notification/Notification";

import { moviesMapper } from "./utils/mapper";
import { fetchMovies } from "./services/moviesApi";

class App extends Component {
  state = {
    movies: [],
    currentPoster: null,
    isMoviesShown: false,
    isLoading: false,
    error: "",
  };

  componentDidUpdate(_, prevState) {
    const { isMoviesShown } = this.state;
    if (isMoviesShown && isMoviesShown !== prevState.isMoviesShown) {
      this.getMovies();
    }

    if (!isMoviesShown && isMoviesShown !== prevState.isMoviesShown) {
      this.setState({ error: "", movies: [] });
    }
  }

  getMovies = () => {
    this.setState({ isLoading: true });
    fetchMovies()
      .then(({ data: { results } }) => {
        this.setState({ movies: moviesMapper(results), error: "" });
      })
      .catch((error) => this.setState({ error: error.message }))
      .finally(() => this.setState({ isLoading: false }));
  };

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

  toggleMoviesVisibility = () => {
    this.setState((prevState) => ({ isMoviesShown: !prevState.isMoviesShown }));
  };

  render() {
    const { movies, currentPoster, isMoviesShown, isLoading, error } =
      this.state;
    return (
      <>
        <Button
          clickHandler={this.toggleMoviesVisibility}
          text={isMoviesShown ? "Hide movies" : "Show movies"}
        />
        {isLoading && <Loader />}
        {error && <Notification text={error} error />}
        {/* <MoviesGallery
          movies={movies}
          deleteMovie={this.deleteMovie}
          openModal={this.openModal}
        />
        {currentPoster && (
          <Modal currentPoster={currentPoster} closeModal={this.closeModal} />
        )} */}
      </>
    );
  }
}

export default App;

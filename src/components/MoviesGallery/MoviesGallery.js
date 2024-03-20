export const MoviesGallery = ({ movies, deleteMovie, openModal }) => {
  return (
    <ul>
      {movies.map(({ title, vote_count, id, poster_path }) => {
        return (
          <li key={id}>
            <h2>{title}</h2>
            <p>Votes: {vote_count}</p>
            <button onClick={() => deleteMovie(id)}>Delete</button>
            <button onClick={() => openModal({src: poster_path, alt: title})}>Open modal</button>
          </li>
        );
      })}
    </ul>
  );
};

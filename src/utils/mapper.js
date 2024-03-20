export const moviesMapper = (movies) => {
  return movies.map(
    ({ title, vote_count: votes, id, poster_path: poster }) => ({
      title,
      votes,
      id,
      poster,
    })
  );
};

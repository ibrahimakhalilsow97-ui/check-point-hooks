

    import MovieCard from "./MovieCard";

function MovieList({ movies }) {
    return (
        <div className="movie-list">
        {movies.map((movie, index) => (
            <MovieCard
            key={index}
            titre={movie.titre}
            description={movie.description}
            posterURL={movie.posterURL}
            note={movie.note}
            />
        ))}
        </div>
    );
    }

    export default MovieList;

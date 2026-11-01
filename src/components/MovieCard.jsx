

    function MovieCard({ titre, description, posterURL, note }) {
    return (
        <div className="movie-card">

        <img className="movie-poster" src={posterURL} alt={titre} />
        

        <h2>{titre}</h2>

        <p>{description}</p>

        <p>Note : {note}/10</p>
        </div>
    );
    }

    export default MovieCard;

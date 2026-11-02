    import { useParams, Link } from "react-router-dom";
    import moviesData from "../movies.js";

    function MovieDetails() {
    const { id } = useParams();

    const movie = moviesData.find(
        (film) => film.id === Number(id)
    );

    if (!movie) {
        return <h2>Film introuvable</h2>;
    }

    return (
        <div>
        <h1>{movie.titre}</h1>

        <p>{movie.description}</p>

        <h2>Bande-annonce</h2>

        <iframe
            width="560"
            height="315"
            src={movie.trailerURL}
            title={movie.titre}
            allowFullScreen
        ></iframe>

        <br />

        <Link to="/">Retour à l'accueil</Link>
        </div>
    );
    }

    export default MovieDetails;
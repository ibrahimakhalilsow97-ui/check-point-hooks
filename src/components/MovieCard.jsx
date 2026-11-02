    import { Link } from "react-router-dom";
    import Card from "react-bootstrap/Card";

    function MovieCard({ id, titre, description, posterURL, note }) {
    return (
        <Link to={`/film/${id}`} className="movie-link">
        <Card bg="dark" text="light" className="movie-card h-100">
            {posterURL ? (
            <Card.Img
                variant="top"
                src={posterURL}
                alt={titre}
                className="movie-poster"
            />
            ) : (
            <div className="movie-placeholder">
                🎬
            </div>
            )}

            <Card.Body>
            <Card.Title>{titre}</Card.Title>

            <Card.Text>{description}</Card.Text>

            <div className="movie-rating">
                ⭐ {note}/10
            </div>

            <span className="movie-details">
                Voir les détails →
            </span>
            </Card.Body>
        </Card>
        </Link>
    );
    }

    export default MovieCard;
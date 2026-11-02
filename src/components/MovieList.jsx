    import MovieCard from "./MovieCard";
    import Row from "react-bootstrap/Row";
    import Col from "react-bootstrap/Col";

    function MovieList({ movies }) {
    return (
        <Row className="g-4">
        {movies.map((movie) => (
            <Col key={movie.id} xs={12} md={6}>
            <MovieCard
                id={movie.id}
                titre={movie.titre}
                description={movie.description}
                posterURL={movie.posterURL}
                note={movie.note}
            />
            </Col>
        ))}
        </Row>
    );
    }

    export default MovieList;

import { useState } from "react";
import moviesData from "./movies.js";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import "./App.css";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState("");

  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newPosterURL, setNewPosterURL] = useState("");
  const [newRating, setNewRating] = useState("");

  function handleAddMovie(e) {
    e.preventDefault();

    if (
      !newTitle.trim() ||
      !newDescription.trim() ||
      newRating === ""
    ) {
      alert("Veuillez remplir le titre, la description et la note.");
      return;
    }

    const newMovie = {
      titre: newTitle,
      description: newDescription,
      posterURL: newPosterURL,
      note: Number(newRating),
    };

    setMovies([...movies, newMovie]);

    setNewTitle("");
    setNewDescription("");
    setNewPosterURL("");
    setNewRating("");
  }

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.titre.toLowerCase().includes(searchTitle.toLowerCase()) &&
      movie.note >= (searchRating === "" ? 0 : Number(searchRating))
    );
  });

  return (
    <div className="app">
      <h1>Séries Sénégalaises </h1>

      <Filter
        searchTitle={searchTitle}
        setSearchTitle={setSearchTitle}
        searchRating={searchRating}
        setSearchRating={setSearchRating}
      />

      <form onSubmit={handleAddMovie}>
        <h2>Ajouter une série</h2>

        <input
          type="text"
          placeholder="Titre de la série"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />

        <input
          type="url"
          placeholder="URL de l'affiche (facultatif)"
          value={newPosterURL}
          onChange={(e) => setNewPosterURL(e.target.value)}
        />

        <input
          type="number"
          placeholder="Note sur 10"
          min="0"
          max="10"
          step="0.1"
          value={newRating}
          onChange={(e) => setNewRating(e.target.value)}
        />

        <button type="submit">Ajouter la série</button>
      </form>

      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;

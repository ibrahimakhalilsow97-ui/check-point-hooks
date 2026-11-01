

    function Filter({ searchTitle, setSearchTitle, searchRating, setSearchRating }) {
    return (
        <div className="filter">
        <input
            type="text"
            placeholder="Rechercher une série..."
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
        />

        <input
            type="number"
            placeholder="Note minimale"
            min="0"
            max="10"
            value={searchRating}
            onChange={(e) => setSearchRating(e.target.value)}
        />
        </div>
    );
    }

    export default Filter;

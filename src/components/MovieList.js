import React, { useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, filter, addMovie }) => {
    const [newMovie, setNewMovie] = useState({
        title: "",
        description: "",
        imgURL: "",
        rating: 0,
    });

    const filteredMovies = movies.filter(
        (movie) =>
            movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
            movie.rating >= filter.rating
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewMovie({ ...newMovie, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newMovie.title && newMovie.rating) {
            addMovie({ ...newMovie, rating: Number(newMovie.rating) });
            setNewMovie({ title: "", description: "", imgURL: "", rating: 0 });
        }
    };

    return (
        <div>
            <h2>Liste des Films</h2>
            {filteredMovies.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
            ))}

            <h2>Ajouter un Nouveau Film</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="Titre"
                    value={newMovie.title}
                    onChange={handleChange}
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={newMovie.description}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="imgURL"
                    placeholder="URL de l'affiche"
                    value={newMovie.imgURL}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="rating"
                    placeholder="Note"
                    value={newMovie.rating}
                    onChange={handleChange}
                    min="0"
                    max="10"
                />
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
};

export default MovieList;

import React from "react";

const MovieCard = ({ movie }) => {
    return (
        <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <img src={movie.imgURL} alt={movie.title} style={{ width: "150px" }} />
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <p><strong>Note :</strong> {movie.rating}/10</p>
        </div>
    );
};

export default MovieCard;

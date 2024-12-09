import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, index }) => {
    return (
        <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <Link to={`/movie/${index}`}>
                <img src={movie.imgURL} alt={movie.title} style={{ width: "150px" }} />
            </Link>            
            <h3>{movie.title}</h3>
            <p>{movie.description}</p>
            <p><strong>Note :</strong> {movie.rating}/10</p>
        </div>
    );
};

export default MovieCard;

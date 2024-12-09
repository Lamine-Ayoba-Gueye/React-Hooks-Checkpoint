import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetail = ({ movies }) => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  
  const movie = movies[parseInt(id)];

  if (!movie) {
    return <div>Film non trouvé</div>; 
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Note: {movie.rating}</p>
      <a href={movie.trailerURL} target="_blank" rel="noopener noreferrer">Regarder la bande-annonce</a>
      <button onClick={() => navigate('/', { replace: true })}>Retour à l'accueil</button> 
    </div>
  );
};

export default MovieDetail;
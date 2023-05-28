import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { imageUrl, API_KEY } from "../../constant/constant";
import "./movieDetails.css";
import { useParams } from "react-router-dom";
import Youtube from "react-youtube";

function MovieDetails() {
  const [movie, setMovie] = useState();
  const { id } = useParams();
  const [urlid, seturlid] = useState("");

  useEffect(() => {
    axios
      .get(`/movie/${id}?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setMovie(response.data);
      });
  }, [id]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const movievideo = (id) => {
    console.log(id, "sfdhjdsfhjdshjdshjdsjdsjdjsfj");
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data);
        if (response.data.results.length !== 0) {
          seturlid(response.data.results[0]);
        } else {
          console.log("empty ");
        }
      });
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${
            movie ? imageUrl + movie.backdrop_path : ""
          })`,
        }}
        className="movieBanner"
      >
        <div className="movie_content">
          <h1 className="movie_title">{movie ? movie.title : ""}</h1>
          <div className="banner_buttons">
            <button
              onClick={() => movievideo(movie.id)}
              className="movie_button"
            >
              Play
            </button>
          </div>
          <h1 className="movie_description">{movie ? movie.overview : ""}</h1>
          <div className="moviedate">
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
          </div>
          <div className="movie_fade"></div>
        </div>
      </div>

      {urlid && <Youtube videoId={urlid.key} opts={opts} />}
    </div>
  );
}

export default MovieDetails;

import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import "./Movie.css";

// 컴포넌트가 state 가 필요없을 경우에는 class component 가 될 필요가 없다.
function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <Link to={{
      pathname: `/movie/${id}`,
      state: {
        year, title, summary, poster, genres 
      }
    }}>
      <div className="movie">
        <img src={poster} alt={title}></img>
        <div className="movie_data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie_year">{year}</h5>
          <ul className="movie__genres">
            { genres && genres.map( (genre, index) => (
              <li key={index} className="genres_genre">{genre}</li>
            ))}
          </ul>
          <p className="movie_summary">{summary.slice(0, 180)}...</p>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;

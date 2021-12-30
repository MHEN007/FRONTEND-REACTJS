import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Detail = ( {movies, addWishlist} ) => {
    const { id } = useParams();
    return(
    <div className="content">
        <div id="catalog">
        {movies
        .filter((movie) => movie.id === id)

        .map((movie) =>
            <div className="catalog" key={movie.id}>
                <span className="movietitle">{movie.title}</span><br/>
                <img className="picture" src={movie.picture_url} alt={movie.title}/><br/>
                <p>Rating {movie.rating}</p>
                <p>{movie.detail}</p>
                <Link to="/"><button className="button">Back</button></Link>
                <button className='button' onClick = {() => addWishlist(movie)}>Watchlist</button>
            </div>
        )}
        </div>
    </div>
    );
}

export default Detail
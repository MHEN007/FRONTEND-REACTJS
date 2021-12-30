import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Catalog = ({movies, addWishlist}) =>{
    return(
        <div className="content">
            <h3>Temukan informasi mengenai film-film di bawah ini!</h3>
            <div id="catalog">
                {movies.map((movie)=>
                    <div className="catalog" key={movie.id}>
                        <span className="movietitle">{movie.title}</span><br/>
                        <img className="picture" src={movie.picture_url} alt={movie.title}/><br/>
                        <Link to={`/detail/${movie.id}`}><button className="button">View Detail</button></Link>
                        <button className='button' onClick = {() => addWishlist(movie)}>Watchlist</button>
                    </div>
                )}
            </div>
            
        </div>
    );
}
export default Catalog
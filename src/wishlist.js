import { Link } from 'react-router-dom';
const Wishlist = ({ wishlist, remove })=>{
return(
    <div className="content">
    <div id="catalog">
        <h2>Your Watch List</h2>
        {wishlist.map((wishlist) =>
            <div className="catalog" key={wishlist.id}>
                <span className="movietitle">{wishlist.title}</span><br/>
                <img className="picture" src={wishlist.picture_url} alt={wishlist.title}/><br/>
                <Link to={`/detail/${wishlist.id}`}><button className="button">Detail</button></Link>
                <button className='button' onClick={()=>remove(wishlist.id)}>Remove from Watchlist</button><br/>
                <Link to="/"><button className="button">Back</button></Link>
            </div>
        )}
    </div>
    </div>
);
};

export default Wishlist;
import './index1.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Catalog from './catalog';
import Detail from './detail';
import Wishlist from './wishlist';

function App() {

  const author = "Matthew Mahendra";
  const year = 2022;
  const title = "Movie Mania";
  const motto = "Your solution for movie reviews";
  const [movies, setMovies] = useState([
    {
        id : '1',
        title : 'Avengers: Endgame',
        picture_url : 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
        detail : 'After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.',
        rating : '8.4/10 imdb'
    },
    {
        id : '2',
        title : 'Avengers: Infinity Wars',
        picture_url : 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg',
        detail : 'The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones. However, Thanos is prepared to go to any lengths to carry out his insane plan.',
        rating : '8.4/10 imdb'
    },
    {
        id : '3',
        title : 'Venom 2: Let There Be Carnage',
        picture_url : 'https://cineverse.id/wp-content/uploads/2021/09/poster-venom.jpg',
        detail : 'Eddie Brock is still struggling to coexist with the shape-shifting extraterrestrial Venom. When deranged serial killer Cletus Kasady also becomes host to an alien symbiote, Brock and Venom must put aside their differences to stop his reign of terror.',
        rating : '6.4/10 imdb'
    },
    {
        id : '4',
        title : 'John Wick',
        picture_url : 'https://m.media-amazon.com/images/I/81F5PF9oHhL._AC_SL1500_.jpg',
        detail : `After the sudden death of his beloved wife, John Wick receives one last gift from her, a beagle puppy named Daisy, and a note imploring him not to forget how to love. But John's mourning is interrupted when his 1969 Boss Mustang catches the eye of sadistic thug Iosef Tarasov who breaks into his house and steals it, beating John unconscious and leaving Daisy dead. Unwittingly, they have just reawakened one of the most brutal assassins the underworld has ever seen.`,
        rating : '7.4/10 imdb'
    }
  ]);

  const [wishlist, setWishlist] = useState([]);

  const addWishlist = (movie) => {
      setWishlist([...wishlist, movie]);
  };

  const deleteWishlist = (id) => {
      const removeWishlist = wishlist.filter((movie)=> movie.id !== id);
      setWishlist(removeWishlist);
  }
  return (
    <Router>
      <div className="container">

          <Header title={title} motto={motto}/>

          <div className="navbar">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/wishlist">Watch List</Link></li>
            </ul>
          </div>
          <Switch>

            <Route exact path="/">
              <Catalog movies = {movies} addWishlist = {addWishlist}/>
            </Route>

            <Route path="/detail/:id">
              <Detail movies = {movies} addWishlist = {addWishlist}/>
            </Route>
            
            <Route path="/wishlist">
              {wishlist && <Wishlist wishlist = {wishlist} remove={deleteWishlist}/>}
            </Route>
          </Switch>

          <Footer author={author} year={year}></Footer>
          
      </div>
    </Router>
  );
}

export default App;

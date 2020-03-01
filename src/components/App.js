import React, {Fragment,Component } from 'react';

import '../App.css';
import Header from './Header';
import Movie from './Movie';
import {initialMovies} from '../movies';
import {additionalMovies} from '../movies';
import AddMovie from './AddMovie';

class App extends Component {
  constructor() {
    super();
   
    this.state = {
      movies: initialMovies
    };
    this.addMovieToGallery = this.addMovieToGallery.bind( this );
    this.loadAdditionalMovies = this.loadAdditionalMovies.bind(this);
  }
  addMovieToGallery( movie ) {
    var ts = Date.now();
    var newMovie = {};
    newMovie[ 'movie' + ts ] = movie;
    var currentMovies = { ...this.state.movies };
    var newMovies = Object.assign( currentMovies, newMovie );
    this.setState({ movies: newMovies });
  }
  loadAdditionalMovies() {
    var currentMovies = { ...this.state.movies };
    var newMovies = Object.assign( currentMovies, additionalMovies );
   
    this.setState({ movies: newMovies });
  }
  render() {
    return (
      <Fragment>
        <Header text="Peliculas" />
  
      <div className="App container">
       
      
        <div className="row">
        <p className="App-intro">Sharing a few of our favorite movies</p>
        </div>
        <div className="row">
        
        {
    Object
    .keys(this.state.movies)
    .map(key => <div className="col-md-4 col-sm-6 col-lg-3"><Movie key={key} meta={this.state.movies[key]} /></div>)
}

        </div>
        <br></br>
        <div className="add-movies"><button className="btn btn-dark"type="button" onClick={this.loadAdditionalMovies}>Load more...</button></div>
      
      </div>
      <div>
      <div className="fondo-form">
            <div className="transparente">
      <AddMovie addMovie={this.addMovieToGallery} />
      </div></div>
      </div>
      </Fragment>
    );
  }
}
 
export default App;

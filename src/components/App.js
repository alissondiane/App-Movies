import React, { Component } from 'react';
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
    this.loadAdditionalMovies = this.loadAdditionalMovies.bind(this);
  }
  loadAdditionalMovies() {
    var currentMovies = { ...this.state.movies };
    var newMovies = Object.assign( currentMovies, additionalMovies );
   
    this.setState({ movies: newMovies });
  }
  render() {
    return (
      <div className="App container">
        <Header text="Discover Your Movie Mojo!" />
        <p className="App-intro">Sharing a few of our favourite movies</p>
        <div className="movies">
        {
    Object
    .keys(this.state.movies)
    .map(key => <Movie key={key} meta={this.state.movies[key]} />)
}
        </div>
        <div className="add-movies"><button onClick={this.loadAdditionalMovies}>Load more...</button></div>
        <AddMovie />
      </div>
    );
  }
}
 
export default App;

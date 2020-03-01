import React, { Component } from 'react';
 
class AddMovie extends Component {
  
  addNewMovie(e) {
    alert("hola");
    e.preventDefault();
    var movie =  {
      title: this.title.value,
      year: this.year.value,
      description: this.description.value,
      poster: this.poster.value
    };
    console.log(movie);
    this.props.addMovie( movie );
  }
  render() {
    return (

      
      <form  onSubmit={(e) => this.addNewMovie(e)}  className="movie-form">
        <p className="title-form">Add a Movie to Gallery</p>
        <div>
          <input ref={ ( input ) => this.title = input } type="text" class="form-control" placeholder="Title"/>
        </div>
        <div>
          <input ref={ ( input ) => this.year = input } type="text" class="form-control" placeholder="Year"/>
        </div>
        <div>
          <input ref={ ( input ) => this.poster = input } type="text" class="form-control" placeholder="Poster"/>
        </div>
        <div>
        <textarea ref={ ( input ) => this.description = input} class="form-control" placeholder="Description">
        </textarea>
        </div>
        <div>
        <button type="submit" class="btn btn-dark btn-md btn-block">Add Movie</button>
        </div>
      </form>
    );
  }
}
 
export default AddMovie;
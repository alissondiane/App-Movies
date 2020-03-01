import React, { Component } from 'react';
 
class Movie extends Component {
  
  render() {
    return (
<div className="card">
  <img className="card-img-top" src={ this.props.meta.poster } alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{ this.props.meta.title }</h5>
    <p>({ this.props.meta.year })</p>
    {/*<p className="card-text">{ this.props.meta.description }</p>*/}
    <a href="#" className="btn btn-secondary">DETAIL</a>
  </div>
</div>
    );
  }
}
 
export default Movie;
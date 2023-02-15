import React, { Component } from "react";

class NotFound extends Component {
  render() {
    const url = 'https://media.tenor.com/QvnSpdGuVXUAAAAM/pikachu-crying.gif';
    return (
      <div className="not-found">
        <h1>Page Request Not Found!</h1>
        <img src={ url } alt="page not found" className="not-found-image" />
      </div>
    );
  }
}

export default NotFound;

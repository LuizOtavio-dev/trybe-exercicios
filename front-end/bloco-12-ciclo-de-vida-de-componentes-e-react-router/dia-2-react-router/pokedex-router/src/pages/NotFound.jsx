import React, { Component } from "react";

class NotFound extends Component {
  render() {
    const url = 'https://media.tenor.com/QvnSpdGuVXUAAAAM/pikachu-crying.gif';
    return (
      <>
        <h1>Page Request Not Found!</h1>
        <img src={ url } alt="page not found" />
      </>
    );
  }
}

export default NotFound;

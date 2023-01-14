import React, { Component } from 'react';
import './App.css';

const API = 'https://dog.ceo/api/breeds/image/random';

class App extends Component {
  constructor() {
    super();

    this.state = {
      srcImage: '',
      loading: true,
    };

    this.fetchDogs = this.fetchDogs.bind(this);
  }

  fetchDogs() {
    this.setState(() => ({
      loading: true,
    }), async () => {
      const request = await fetch(API);
      const response = await request.json();
      
      this.setState({
        srcImage: response.message,
        loading: false,
      })
    })
  };

  componentDidMount() {
    this.fetchDogs();
  };

  shouldComponentUpdate(_nextProps, nextState) {
    return !nextState.srcImage.includes('terrier')
  };

  componentDidUpdate() {
    const { srcImage } = this.state;
    localStorage.setItem('srcImage', srcImage);
    const dogBreed = srcImage.split('/')[4];
    alert(`Raça do doguinho: ${dogBreed}`)
  }

  render() {
    const { srcImage, loading } = this.state;
    const messageLoading = <div>Carregando...</div>;

    if (loading) return messageLoading;

    return (
      <div>
        <h1>Doguinho</h1>
        <img src={ srcImage } alt='dog random' />
        <button type='button' onClick={ this.fetchDogs }>Buscar dog</button>
      </div>
    );
  }
}

export default App;

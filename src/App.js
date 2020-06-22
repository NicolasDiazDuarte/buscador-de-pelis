import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import {Title} from './components/Title';
import {SearchForm} from './components/SearchForm'

class App extends Component {
  state={ results : [] }

  _handleResults= (results)=> {
    this.setState({results})
  }

  _renderResults(){
    const {results} = this.state 
    return results.map(movie=>{
      return <p key={movie.imbdID}>{movie.Title}</p>
    })
  }
  render (){
    return (
      <div className="App">
        <Title>Buscador de pelis</Title>
        <div className='SearchForm-Wrapper'  >
          <SearchForm onResults ={this._handleResults}/>
        </div>
        {this.state.results.length === 0 
        ? <p> Sin resultados </p>
        : this._renderResults()
        }
      </div>
    )
  }
}

export default App;

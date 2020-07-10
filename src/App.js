import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import {Title} from './components/Title';
import {SearchForm} from './components/SearchForm';
import { MoviesList } from './components/MoviesList';

class App extends Component {
  state={ usedSearch:false ,results : [] }

  _handleResults= (results)=> {
    this.setState({results,usedSearch:true})
  }

  _renderResults() {
    return this.state.results.length === 0 
    ? <p>Disculpa,no se encontro la pelicula </p>
    : <MoviesList movies={this.state.results} />
    }


  render (){
    return (
      <div className="App">
        <Title>Buscador de pelis</Title>
        <div className='SearchForm-Wrapper'  >
          <SearchForm onResults ={this._handleResults}/>
        </div>
        {this.state.usedSearch
          ? this._renderResults()
          :<small>Busque una pelicula aqui</small>
          
        }
      </div>
    )
  }
}

export default App;

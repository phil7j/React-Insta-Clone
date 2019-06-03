import React, { Component } from 'react'
import data from './dummy-data'
import './App.css';
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar'

export class App extends Component {
  constructor(){
    super();
    this.state = {
      data: data
    }
  }
  render() {
    return (
      <div>
        <SearchBar />
        {this.state.data.map( item =>  <PostContainer key={item.id} data={item} />)}
      </div>
    )
  }
}

export default App

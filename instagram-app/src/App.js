import React, { Component } from 'react'
import data from './dummy-data'
import './App.css';
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar'


export class App extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      filteredPosts: [],
      search: ''
    }
  }

  componentDidMount(){
    this.setState({
      data: data
    })
  }

  componentDidUpdate(){
    // console.log(this.state.search);
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  searchFilter = e => {
    const filtered = this.state.data.filter(post =>
      post.username.toLowerCase().includes(e.target.value.toLowerCase()) ||
      post.likes.toString().includes(e.target.value.toString()))
    this.setState({filteredPosts: filtered})
  }

  render() {
    return (
      <div className="container">
        <SearchBar
          handleChanges={this.handleChanges}
          newSearch={this.state.search}
          searchFilter={this.searchFilter}
        />
        {this.state.filteredPosts.length === 0 ? this.state.data.map( item =>
        <PostContainer
          key={item.id} data={item}
          addComment={this.addComment}
          />)
          : this.state.filteredPosts.map( item =>
            <PostContainer
              key={item.id} data={item}
              addComment={this.addComment}
              />)
        }
      </div>
    )
  }
}

export default App
